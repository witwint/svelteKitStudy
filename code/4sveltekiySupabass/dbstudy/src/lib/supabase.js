import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ptaoxwriohiqnfepwblr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0YW94d3Jpb2hpcW5mZXB3YmxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgyNTkyNTksImV4cCI6MjAwMzgzNTI1OX0.--S8B-scmAm7S7w4gzkx-j7lT3292U_rCSrgW1Oxops';

export const supabase = createClient(supabaseUrl, supabaseKey);
