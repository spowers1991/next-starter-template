"use client";

import { ReactNode } from "react";
import { useUser } from '@/services/[Users]/{User}/state/UserContext';
import { supabase } from "@/lib/supabase/supabaseClient";
import { useThemes } from "@/lib/themes/state/ThemeContext";

import Button from "@/components/html/{Button}/Button";
import LoginForm from "@/components/html/{Form}/{LoginForm}/LoginForm";

interface UserProps {
  children?: ReactNode;
}

export default function User({ children }: UserProps) {

  const { user } = useUser();

  const { THEMES_activeTheme } = useThemes();

  return (
    user ? 
      <div className="max-w-sm mx-auto space-y-4 p-6 bg-white rounded shadow">
        <div className="max-w-sm mx-auto space-y-4 p-6 bg-white rounded shadow text-center">
          <p className="text-left text-lg text-gray-700">You are logged in as {user?.email}.</p>
        </div>
        <Button onClick={() => {supabase.auth.signOut()}}>
          Logout
        </Button>
      </div>
      :
      <div className="max-w-sm mx-auto space-y-4 p-6 bg-white rounded shadow">
        <LoginForm />
      </div>
  );
}
