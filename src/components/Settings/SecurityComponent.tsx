import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
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

const SecurityComponent: React.FC = () => {
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const { data: session } = useSession();
  console.log(session);

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
      const response = await axios.put(
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

  const togglePasswordVisibility = (field: "old" | "new" | "confirm") => {
    switch (field) {
      case "old":
        setShowOldPassword((prev) => !prev);
        break;
      case "new":
        setShowNewPassword((prev) => !prev);
        break;
      case "confirm":
        setShowConfirmPassword((prev) => !prev);
        break;
    }
  };

  return (
    <div className="w-[100%]">
      <form onSubmit={handleSubmitReset}>
        <div className="border p-8">
          <h1 className="font-semibold text-2xl mb-1">Security</h1>
          <p className="text-[16px]">Account security settings</p>
        </div>
        <div className="ml-8 w-[700px]">
          <div className="flex flex-col mt-[16px]"></div>
        </div>
        <div className="flex ">
          <div className="mb-8 ml-8 w-[700px]">
            <div className="mt-8 w-[700px]">
              <div className="flex flex-col mt-[16px]">
                <label
                  className="mb-[12px] text-[16px] font-medium"
                  htmlFor="oldPassword"
                >
                  Old password
                </label>
                <TextField
                  id="oldPassword"
                  placeholder="Enter your old password"
                  type={showOldPassword ? "text" : "password"}
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => togglePasswordVisibility("old")}
                        >
                          {showOldPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col mt-[16px]">
              <label
                className="mb-[12px] text-[16px] font-medium"
                htmlFor="newPassword"
              >
                New password
              </label>
              <TextField
                id="newPassword"
                placeholder="Enter your new password"
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => togglePasswordVisibility("new")}
                      >
                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="flex flex-col mt-[16px]">
              <label
                className="mb-[12px] text-[16px] font-medium"
                htmlFor="confirmPassword"
              >
                Confirm password
              </label>
              <TextField
                id="confirmPassword"
                placeholder="Confirm your new password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => togglePasswordVisibility("confirm")}
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className="ml-8 mt-44 mr-4 ">
            <div className="bg-[#EEF2FF] rounded-md p-[10px]">
              <h1>Your password must:</h1>
              <div className="text-sm">
                <div className="flex">
                  <CheckIcon
                    className={`h-4 w-4 ${
                      passwordValidation.length
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  />
                  <p
                    className={` ml-2 ${
                      passwordValidation.length
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  >
                    Be at least 8 characters
                  </p>
                </div>
                <div className="flex">
                  <CheckIcon
                    className={`h-4 w-4 ${
                      passwordValidation.number
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  />
                  <p
                    className={` ml-2 ${
                      passwordValidation.number
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  >
                    Include a number.
                  </p>
                </div>
                <div className="flex">
                  <CheckIcon
                    className={`h-4 w-4 ${
                      passwordValidation.uppercase &&
                      passwordValidation.lowercase
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  />
                  <p
                    className={` ml-2 ${
                      passwordValidation.uppercase &&
                      passwordValidation.lowercase
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  >
                    Have both uppercase and lowercase letters.
                  </p>
                </div>
                <div className="flex">
                  <CheckIcon
                    className={`h-4 w-4 ${
                      passwordValidation.specialChar
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  />
                  <p
                    className={`ml-2 ${
                      passwordValidation.specialChar
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  >
                    Include at least one special character.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-8">
          <Button
            type="submit"
            className="mb-9 self-start text-white rounded-lg bg-LawGuardPrimary px-12 py-4 text-[16px] font-semibold hover:bg-LawGuardPrimary"
          >
            {loading ? "Loading...." : "Save changes"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SecurityComponent;
