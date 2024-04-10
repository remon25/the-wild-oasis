import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ejxunqckasmgeakdvett.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqeHVucWNrYXNtZ2Vha2R2ZXR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2NDM5MzEsImV4cCI6MjAyNzIxOTkzMX0.l6UDPsF8sC2TBWaLiaT0C-tf6RD3JqpVY3NZTsOFcQQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
