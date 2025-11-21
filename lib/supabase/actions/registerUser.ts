import { supabase } from '@/lib/supabase/supabaseClient';

export const registerUser = async (email: string, password: string) => {
  
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    
    return { success: true, message: 'Registration successful!', user: data.user };
  

  } catch (err: any) {
    return { success: false, message: err.message || 'An error occurred during registration.' };
  }
};

