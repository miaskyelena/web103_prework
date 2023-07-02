import { createClient } from '@supabase/supabase-js';

const URL = "https://puabxqsgdqhujyvcmdha.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1YWJ4cXNnZHFodWp5dmNtZGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY3NzE5ODYsImV4cCI6MjAwMjM0Nzk4Nn0.mep2ziparnUReyAYwyUWxZpYNK8k8qAAijjLaUAT2AQ"

export const supabase = createClient(URL, API_KEY);