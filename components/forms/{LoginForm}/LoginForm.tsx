"use client";

import { useState } from "react";
import { loginUser } from "@/lib/supabase/actions/loginUser";
import { handleFormSubmit } from "@/lib/forms/actions/handleFormSubmit";

import { useUser } from "@/services/[Users]/{User}/state/UserContext";
import { useRedirect } from "@/lib/next/router/hooks/useRedirect";

import Form from "@/components/html/{Form}/Form";
import FormField from "@/components/html/{Form}/{FormField}/FormField";

export default function LoginForm() {
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");
  const [message, setMessage] = useState<string | null>(null);

  const { user } = useUser();
  // Redirect to /user if already logged in
  useRedirect(user, '/user');

  const statusMessages: Record<"idle" | "success" | "error" | "loading", string | null> = {
    idle: null,
    loading: "Loading...",
    success: "Login successful!",
    error: "THIS IS OVERWRITTEN BY DEFAULT ERROR HANDLING IN handleFormSubmit, BUT CAN BE USED FOR CUSTOM MESSAGES IF NEEDED",
  };

  const handleSubmit = handleFormSubmit(loginUser, formValues, setStatus, setMessage, statusMessages);

  return (
    <Form onChange={setFormValues} onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4 p-6 bg-white rounded shadow">

      {message && (
        <p className={`text-sm 
          ${status === "error" ? "text-red-500" : ""}
          ${status === "success" ? "text-green-600" : ""}
          ${status === "loading" ? "text-gray-500" : ""}
        `.replace(/\s+/g, ' ')}>
          {message}
        </p>
      )}

      <FormField label="Email" name="email" type="email" />
      <FormField label="Password" name="password" type="password" />

      <button type="submit" disabled={status === "success"} className={`text-lg uppercase w-full bg-blue-600 text-white py-2 rounded ${status !== "success" && "hover:bg-blue-700"} transition`} aria-busy={status === "loading" ? "true" : "false"}>
        {status === "loading"
          ? "Logging in..."
          : status === "success"
            ? "Log in successful"
            : "Login"}
      </button>

    </Form>
  );
}