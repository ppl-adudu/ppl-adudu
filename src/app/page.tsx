import { createClient } from "./utils/supabase/server";

export default async function Page() {
  const supabase = createClient();
  const { data: greetings } = await supabase.from("greetings").select();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Greetings</h1>
        <pre className="bg-gray-200 p-4 rounded-lg overflow-auto">
          {JSON.stringify(greetings, null, 2)}
        </pre>
      </div>
    </div>
  );
}
