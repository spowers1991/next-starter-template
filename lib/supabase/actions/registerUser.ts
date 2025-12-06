import { supabase } from '@/lib/supabase/supabaseClient';

export const registerUser = async (email: string, password: string) => {
  
  try {
    const { data } = await supabase.auth.signUp({
      email,
      password,
    });
    
    return { success: true, message: 'Registration successful!', user: data.user };
  

  } catch (err: unknown) {
    let message = 'An error occurred during registration.';

    if (err instanceof Error) {
      message = err.message;
    }

    return { success: false, message };
  }
};

