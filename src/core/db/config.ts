import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

// Load environment variables from .env.development or .env
config({ path: ".env.development" });
config({ path: ".env", override: false });

export default defineConfig({
  out: "./src/config/db/migrations",
  schema: "./src/config/db/schema.ts",
  dialect: (process.env.DATABASE_PROVIDER || "postgresql") as
    | "sqlite"
    | "postgresql"
    | "mysql"
    | "turso"
    | "singlestore"
    | "gel",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "",
  },
});
