import { betterAuth } from "better-auth";
import { authOptions, getAuthOptions } from "./config";

/**
 * Check if we're in build phase
 * NEXT_PHASE values:
 * - "phase-production-build" - during `next build`
 * - "phase-development-server" - during `next dev`
 * - "phase-production-server" - during `next start`
 * - undefined - normal runtime (API routes, server components)
 *
 * We skip auth creation during build to avoid:
 * 1. Database connection attempts
 * 2. "No database configuration" warnings
 * 3. Slower build times
 */
const isBuild =
  process.env.NEXT_PHASE === "phase-production-build" ||
  process.env.NEXT_PHASE === "phase-export";

// Static auth - only create if not in build phase
// During build: undefined (auth not needed for static generation)
// During runtime: betterAuth instance (for client-side auth)
export const auth = isBuild ? (undefined as any) : betterAuth(authOptions);

// Dynamic auth - with full database configuration
// Always use this in API routes that need database access
export async function getAuth() {
  return betterAuth(await getAuthOptions());
}
