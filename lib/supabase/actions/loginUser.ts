import { supabase } from '@/lib/supabase/supabaseClient';

export const loginUser = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) { 
      return { success: false, message: error.message };
    }

    const sessionToken = data.session?.access_token;  

    return { success: true, message: 'Login successful!', user: data.user, sessionToken };
  } catch (err: any) {
    console.error('Unexpected Error:', err.message);
    return { success: false, message: err.message || 'An unexpected error occurred.' };
  }
};

