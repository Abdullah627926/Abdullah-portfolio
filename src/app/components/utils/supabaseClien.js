
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ulgutuugiheruwiozipv.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsZ3V0dXVnaWhlcnV3aW96aXB2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwODI1NjE2NiwiZXhwIjoyMDIzODMyMTY2fQ.L27Wb1I2HfRn9E0awUTh7CSuJvmeeaI0p3B0em6h9Kg"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;