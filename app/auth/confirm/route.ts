import { type EmailOtpType } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";

import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;

  if (!tokenHash || !type) {
    return NextResponse.redirect(
      new URL("/account/login?error=confirmation_failed", request.url)
    );
  }

  const supabase = await createServerSupabaseClient();

  const { error } = await supabase.auth.verifyOtp({
    token_hash: tokenHash,
    type,
  });

  if (error) {
    console.error("[auth/confirm]", error);

    return NextResponse.redirect(
      new URL("/account/login?error=confirmation_failed", request.url)
    );
  }

  return NextResponse.redirect(
    new URL("/account", request.url)
  );
}