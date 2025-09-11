import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { envConfigs } from "@/config";
import { db } from "@/core/db";
import * as schema from "@/config/db/schema";
import { getSocialProviders } from "./config";

export const auth = betterAuth({
  database: drizzleAdapter(db(), {
    provider: getDatabaseProvider(envConfigs.database_provider),
    schema: schema,
  }),
  secret: envConfigs.auth_secret ?? "",
  socialProviders: await getSocialProviders(),
});

function getDatabaseProvider(provider: string): "sqlite" | "pg" | "mysql" {
  switch (provider) {
    case "sqlite":
      return "sqlite";
    case "postgresql":
      return "pg";
    case "mysql":
      return "mysql";
    default:
      throw new Error(
        `Unsupported database provider for auth: ${envConfigs.database_provider}`
      );
  }
}
