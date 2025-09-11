import { createAuthClient } from "better-auth/react";
import { envConfigs } from "@/config";

export const authClient = createAuthClient({
  baseURL: envConfigs.auth_url,
  secret: envConfigs.auth_secret,
});

export const { signIn, signUp, signOut, useSession } = authClient;
