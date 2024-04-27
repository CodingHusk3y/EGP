import { createClient } from '@supabase/supabase-js'

const URL = 'https://ivepaxoblsjswdgziyik.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2ZXBheG9ibHNqc3dkZ3ppeWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NTQ2NTcsImV4cCI6MjAyODQzMDY1N30.pSPdXwyiIMjK2ZsLOxIZLXh6rt4qzejk2ZbrMNLoMo8';

export const supabase = createClient(URL, API_KEY);
