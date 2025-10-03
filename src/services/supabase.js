import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://bicjgjbtgdguatffhwlf.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpY2pnamJ0Z2RndWF0ZmZod2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzNDg5MjgsImV4cCI6MjA3NDkyNDkyOH0.JU63oM6vBiVo6v14ujDRApl_kW0KVh80YfbF0imEy8M"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;