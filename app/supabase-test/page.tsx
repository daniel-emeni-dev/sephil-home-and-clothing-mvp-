import { supabase } from "@/lib/supabase/client";

export default async function SupabaseTestPage() {
  const { error } = await supabase
    .from("products")
    .select("*")
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