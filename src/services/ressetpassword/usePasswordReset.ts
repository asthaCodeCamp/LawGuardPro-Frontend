import { useState, useEffect } from "react";
import axios from "axios";
import { getCsrfToken, useSession } from "next-auth/react";
import { toast } from "sonner";

interface PasswordValidation {
  length: boolean;
  number: boolean;
  uppercase: boolean;
  lowercase: boolean;
  specialChar: boolean;
}

const usePasswordReset = () => {
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { data: session } = useSession();

  useEffect(() => {
    const fetchCsrfToken = async () => {
      const csrfTokenData = await getCsrfToken();
      setCsrfToken(csrfTokenData ?? null);
    };

    fetchCsrfToken();
  }, [session]);

  const validatePassword = (password: string): PasswordValidation => {
    return {
      length: password.length >= 8,
      number: /\d/.test(password),
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
  };

  const passwordValidation = validatePassword(newPassword);

  const handleSubmitReset = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!session) {
      toast.error("You are not logged in");
      setLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match.");
      setLoading(false);
      return;
    }

    const isValid =
      passwordValidation.length &&
      passwordValidation.number &&
      passwordValidation.uppercase &&
      passwordValidation.lowercase &&
      passwordValidation.specialChar;

    if (!isValid) {
      toast.error("New password does not meet the security criteria.");
      setLoading(false);
      return;
    }

    try {
      await axios.put(
        "https://lawguardpro-api.saams.xyz/api/resetpassword/resetpassword",
        {
          oldPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
            "X-CSRF-Token": csrfToken || "",
          },
        }
      );
      toast.success("Password update successful");
    } catch (error: any) {
      if (error.response) {
        console.error("Failed to update password:", error.response.data);
        toast.error(
          `Failed to update password: ${
            error.response.data.message || error.response.status
          }`
        );
      } else if (error.request) {
        console.error("No response received:", error.request);
        toast.error("No response from the server. Please try again later.");
      } else {
        console.error("Error in password update:", error.message);
        toast.error(`An error occurred: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    csrfToken,
    oldPassword,
    setOldPassword,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    passwordValidation,
    handleSubmitReset,
  };
};

export default usePasswordReset;
