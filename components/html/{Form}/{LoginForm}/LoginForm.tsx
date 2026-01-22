"use client";

import { useState } from "react";
import { loginUser } from "@/lib/supabase/actions/loginUser";
import { handleFormSubmit } from "@/lib/forms/actions/handleFormSubmit";

import Form from "@/components/html/{Form}/Form";
import FormField from "@/components/html/{Form}/{FormField}/FormField";

export default function LoginForm() {
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = handleFormSubmit(loginUser, formValues, setMessage, setLoading, "Login successful!");
    
  return (
    <Form onChange={setFormValues} onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4 p-6 bg-white rounded shadow">
      {message && <p className="text-sm text-red-500">{message}</p>}

      <FormField label="Email" name="email" type="email" />
      <FormField label="Password" name="password" type="password" />

      <button type="submit" disabled={loading} className="text-lg uppercase w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        {loading ? "Logging in..." : "Login"}
      </button>
    </Form>
  );
}
