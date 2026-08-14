import { createServerSupabaseClient } from "@/lib/supabase/server";

export default async function SupabaseTestPage() {
  const supabase = await createServerSupabaseClient();

  const { error } = await supabase
    .from("products")
    .select("id")
    .limit(1);

  return (
    <main className="p-8">
      <h1>Supabase Connection Test</h1>

      <p>
        {error
          ? `Connected, but table doesn't exist yet: ${error.message}`
          : "Connection successful."}
      </p>
    </main>
  );
}    