"use client";

import { useState } from "react";
import { registerUser } from "@/lib/supabase/actions/registerUser";
import { handleFormSubmit } from "@/lib/forms/actions/handleFormSubmit";

import Form from "@/components/[Form]/Form";
import FormField from "@/components/[Form]/[FormField]/FormField";

import { useUser } from "@/services/user/UserContext";

export default function RegisterForm() {
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const { user } = useUser();

  const handleSubmit = handleFormSubmit(registerUser, formValues, setMessage, setLoading, "Registration successful!");
  console.log(user)
  return (
    <Form onChange={setFormValues} onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4 p-6 bg-white rounded shadow">
      {message && (
        <p className={`text-sm ${message.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}

      <FormField label="Email" name="email" type="email" />
      <FormField label="Password" name="password" type="password" />

      <button type="submit" disabled={loading} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
        {loading ? "Registering..." : "Register"}
      </button>
    </Form>
  );
}
