import { Dispatch, SetStateAction } from "react";

// Generic helper for form submission
export const handleFormSubmit = (
  action: (email: string, password: string) => Promise<{ success: boolean; message: string }>,
  formValues: Record<string, string>,
  setMessage: Dispatch<SetStateAction<string | null>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  successMessage?: string
) => {
  return async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      const result = await action(formValues.email, formValues.password);

      if (!result.success) {
        setMessage(result.message);
        setLoading(false);
        return;
      }

      setMessage(successMessage || "Action successful!");
      setLoading(false);
    } catch (err: unknown) {
        let message = 'An error occurred during login.';
        setMessage(message || "An unexpected error occurred.");
        setLoading(false);
        if (err instanceof Error) {
          message = err.message;
          setMessage(err.message || "An unexpected error occurred.");
          setLoading(false);
        }

      return { success: false, message };
    }
  };
};
