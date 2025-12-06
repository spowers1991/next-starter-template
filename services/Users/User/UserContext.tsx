"use client";

import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { supabase } from '@/lib/supabase/supabaseClient';
import type { User } from '@supabase/supabase-js'; 

const UserContext = createContext<{
  user: User | null;
  setUser: (user: User | null) => void;
  isLoggedIn: Boolean;
} | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session) {
        setUser(data.session.user as User);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <UserContext.Provider 
      value={{ 
        user, 
        setUser,
        isLoggedIn 
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

