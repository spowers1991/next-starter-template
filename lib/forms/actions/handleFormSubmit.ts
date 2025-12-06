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
        console.log('not working')
        return;
      }

      setMessage(successMessage || "Action successful!");
      console.log(result)
      setLoading(false);
    } catch (err: any) {
      setMessage(err.message || "An unexpected error occurred.");
      setLoading(false);
    }
  };
};
