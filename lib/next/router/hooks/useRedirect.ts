import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';

export function useRedirect(auth: User | boolean | null, path: string) {
  const router = useRouter();

  console.log(auth, path);
  useEffect(() => {
    if (auth) {
      router.replace(path);
    }
    
  }, [auth, path, router]);
}