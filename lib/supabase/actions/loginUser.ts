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
  } catch (err: unknown) {
    let message = 'An error occurred during login.';

    if (err instanceof Error) {
      message = err.message;
    }

    return { success: false, message };
  }
};

