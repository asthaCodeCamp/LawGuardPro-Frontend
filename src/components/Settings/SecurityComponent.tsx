import { useState } from "react";
import { Button, TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const SecurityComponent = () => {
  const [newPassword, setNewPassword] = useState("");

  const validatePassword = (password: string) => {
    return {
      length: password.length >= 8,
      number: /\d/.test(password),
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
  };

  const passwordValidation = validatePassword(newPassword);

  return (
    <>
      <div className="border p-8">
        <h1 className="font-semibold text-2xl mb-1">Security</h1>
        <p className="text-[16px]">Account security settings</p>
      </div>
      <div className="mt-8 ml-8 w-[700px]">
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
            type="password"
          />
        </div>
      </div>
      <div className="flex ">
        <div className="mb-8 ml-8 w-[700px]">
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
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
              type="password"
            />
          </div>
        </div>
        <div className="ml-8 mt-8 ">
          <div className="bg-[#EEF2FF] rounded-md p-[16px]">
            <h1>Your password must:</h1>
            <div className="text-sm mt-4">
              <div className="flex">
                <CheckIcon
                  className={`h-4 w-4 ${
                    passwordValidation.length
                      ? "text-green-500"
                      : "text-gray-500"
                  }`}
                />
                <p
                  className={`mb-2 ml-2 ${
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
                  className={`mb-2 ml-2 ${
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
                    passwordValidation.uppercase && passwordValidation.lowercase
                      ? "text-green-500"
                      : "text-gray-500"
                  }`}
                />
                <p
                  className={`mb-2 ml-2 ${
                    passwordValidation.uppercase && passwordValidation.lowercase
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
                  className={`mb-2 ml-2 ${
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
          className="self-start text-white rounded-lg bg-LawGuardPrimary px-12 py-4 text-[16px] font-semibold hover:bg-LawGuardPrimary"
        >
          Save changes
        </Button>
      </div>
    </>
  );
};

export default SecurityComponent;
