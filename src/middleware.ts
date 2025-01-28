import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/forum(.*)","/editor(.*)"]);

const isAuthRoute = createRouteMatcher(["/login", "/register"]);

export default clerkMiddleware(async (auth, req) => {
  // Check if the user is logged in by verifying userId
  const user: any = (await auth()).userId;

  // If the user is logged in, prevent access to /login and /home and redirect to /
  if (isAuthRoute(req) && user) {
    return NextResponse.redirect(`${req.nextUrl.origin}/`);
  }

  // Protect the protected routes if the user is not authenticated
  if (isProtectedRoute(req)) {
    if (!user) {
      // If the user is not authenticated, redirect to login page
      return NextResponse.redirect(`${req.nextUrl.origin}/`);
    }
  }

  // Allow the request to continue if no redirection is required
  return NextResponse.next();
});
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
