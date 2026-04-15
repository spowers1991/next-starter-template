"use client";

import { useState } from "react";
import { registerUser } from "@/lib/supabase/actions/registerUser";
import { handleFormSubmit } from "@/lib/forms/actions/handleFormSubmit";

import Form from "@/components/html/{Form}/Form";
import FormField from "@/components/html/{Form}/{FormField}/FormField";

export default function RegisterForm() {
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");

  const statusMessages: Record<"idle" | "success" | "error" | "loading", string | null> = {
    idle: null,
    loading: "Loading...",
    success: "Registration successful!",
    error: "THIS IS OVERWRITTEN BY DEFAULT ERROR HANDLING IN handleFormSubmit, BUT CAN BE USED FOR CUSTOM MESSAGES IF NEEDED",
  };

  const handleSubmit = handleFormSubmit(registerUser, formValues, setStatus, setMessage, statusMessages);

  return (
    <Form onChange={setFormValues} onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4 p-6 bg-white rounded shadow">
      {message && (
        <p className={`text-sm ${message.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}

      <FormField label="Email" name="email" type="email" />
      <FormField label="Password" name="password" type="password" />

      <button type="submit" disabled={status === "success"} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
        {status === "loading"
          ? "Registering..."
          : status === "success"
            ? "Registration successful"
            : "Register"}
      </button>
    </Form>
  );
}
