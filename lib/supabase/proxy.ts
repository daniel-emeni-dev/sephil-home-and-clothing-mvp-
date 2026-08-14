import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(
            ({ name, value }) => {
              request.cookies.set(name, value);
            }
          );

          supabaseResponse = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(
            ({ name, value, options }) => {
              supabaseResponse.cookies.set(
                name,
                value,
                options
              );
            }
          );
        },
      },
    }
  );

  const { data, error } =
    await supabase.auth.getClaims();

  if (error) {
    console.error("[supabase/proxy]", error);
  }

  const claims = data?.claims ?? null;

  const pathname = request.nextUrl.pathname;

  const isLoginPage =
    pathname === "/account/login";

  const isRegisterPage =
    pathname === "/account/register";

  const isPublicAuthRoute =
    isLoginPage || isRegisterPage;

  const isAccountRoute =
    pathname.startsWith("/account") &&
    !isPublicAuthRoute;

  const isAdminRoute =
    pathname.startsWith("/admin");

  const isAuthenticated =
    Boolean(claims?.sub);

  if (
    isPublicAuthRoute &&
    isAuthenticated
  ) {
    return NextResponse.redirect(
      new URL("/account", request.url)
    );
  }

  if (
    isAccountRoute &&
    !isAuthenticated
  ) {
    return NextResponse.redirect(
      new URL("/account/login", request.url)
    );
  }

  if (isAdminRoute) {
    if (!isAuthenticated) {
      return NextResponse.redirect(
        new URL("/account/login", request.url)
      );
    }

    const appMetadata =
      claims?.app_metadata;

    const role =
      typeof appMetadata === "object" &&
      appMetadata !== null &&
      "role" in appMetadata &&
      typeof appMetadata.role === "string"
        ? appMetadata.role
        : undefined;

    if (role !== "admin") {
      return NextResponse.redirect(
        new URL("/", request.url)
      );
    }
  }

  return supabaseResponse;
}