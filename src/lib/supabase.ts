import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase Environment Variables. Check your .env.local file.');
}

// We use createBrowserClient instead of createClient.
// This automatically syncs your login state into secure HTTP Cookies so the Proxy can read them!
export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);