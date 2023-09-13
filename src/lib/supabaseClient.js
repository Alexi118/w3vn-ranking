import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://sqiudgsmqppkfovinfdp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxaXVkZ3NtcXBwa2ZvdmluZmRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwODgxNzEsImV4cCI6MjAwOTY2NDE3MX0.Xa469GVCKZG6-tAin10i2yl-72Z1l1LvduZxql7Pnvc')