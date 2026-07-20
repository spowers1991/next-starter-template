import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useRedirect(truthy: unknown | boolean | null, path: string) {

  const router = useRouter();

  useEffect(() => {
    if (truthy) {
      router.replace(path);
    }
  }, [truthy, path, router]);
  
}