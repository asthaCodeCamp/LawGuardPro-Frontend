import React, { useState } from "react";
import { Button, TextField, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

const SecurityComponent = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const handleClickShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };
  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    setErrors([]);
    setMessage("");

    if (newPassword !== confirmPassword) {
      setErrors(["Passwords do not match"]);
      return;
    }

    const isValid = Object.values(passwordValidation).every(Boolean);
    if (!isValid) {
      setErrors(["Password does not meet the required criteria"]);
      return;
    }

    try {
      const response = await fetch("http://54.203.205.46:5140/api/resetpassword/resetpassword", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          oldPassword,
          newPassword,
        }),
      });

      if (response.ok) {
        setMessage("Password updated successfully");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        const data = await response.json();
        setErrors([data.message || "Failed to update password"]);
      }
    } catch (error) {
      setErrors(["Failed to update password"]);
    }
  };

  return (
    <>
      <div className="border p-8">
        <h1 className="font-semibold text-2xl mb-1">Security</h1>
        <p className="text-[16px]">Account security settings</p>
      </div>
      <div className="mt-8 ml-8 w-[700px]">
        <div className="flex flex-col mt-[16px]"></div>
      </div>
      <div className="flex">
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
                type={showOldPassword ? 'text' : 'password'}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowOldPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showOldPassword ? <Visibility/> : <VisibilityOff/>}
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
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowNewPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showNewPassword ? <Visibility/> : <VisibilityOff/>}
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
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showConfirmPassword ? <Visibility/> : <VisibilityOff/>}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          {errors.length > 0 && (
            <div className="mt-4 text-red-500">
              {errors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
          {message && (
            <div className="mt-4 text-green-500">
              <p>{message}</p>
            </div>
          )}
        </div>
        <div className="ml-8 mt-44 mr-4">
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
          className="mb-10 self-start text-white rounded-lg bg-LawGuardPrimary px-12 py-4 text-[16px] font-semibold hover:bg-LawGuardPrimary"
          onClick={handleSubmit}
        >
          Save changes
        </Button>
      </div>
    </>
  );
};

export default SecurityComponent;
