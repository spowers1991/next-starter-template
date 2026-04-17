"use client";

import { useUser } from '@/services/[Users]/{User}/state/UserContext';
import { supabase } from "@/lib/supabase/supabaseClient";

import Button from "@/components/html/{Button}/Button";
import LoginForm from "@/components/html/{Form}/{LoginForm}/LoginForm";

export default function User() {

  const { user } = useUser();

  return (
    user ? 
      <div className="max-w-sm mx-auto space-y-4 p-6 bg-white rounded shadow">
        <div className="max-w-sm mx-auto space-y-4 p-6 bg-white rounded shadow text-center">
          <p className="text-left text-lg text-gray-700">
            You are logged in as {user?.email}.
          </p>
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
