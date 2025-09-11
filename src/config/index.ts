export type ConfigMap = Record<string, string>;

export const envConfigs = {
  app_url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  default_theme: process.env.NEXT_PUBLIC_DEFAULT_THEME ?? "system",
  database_url: process.env.DATABASE_URL ?? "",
  database_provider: process.env.DATABASE_PROVIDER ?? "postgresql",
  auth_url: process.env.AUTH_URL ?? "",
  auth_secret: process.env.AUTH_SECRET ?? "",
};
