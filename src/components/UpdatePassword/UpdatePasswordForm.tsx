import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { useResetPassword } from "@/modules/ResetPassword/ResetPassword.hook";
import { useRouter } from "next/router";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const UpdatePasswordForm = ({ idAndOtp }: { idAndOtp: string[] }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");

  const { mutate: resetData, isPending } = useResetPassword();
  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleResetPassword = (e: any) => {
    e.preventDefault();
    if (newPassword == confirmNewPassword) {
      resetData({
        userId: idAndOtp[0],
        otp: idAndOtp[1],
        newPassword: newPassword,
      });

      // console.log("reset response ===", response);
      router.push("/login");
    } else {
      setError("New Password and Confirm Password did not match");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg px-8 py-6 max-w-lg w-full">
        <h1 className="text-[28px] font-semibold mb-4">
          Choose a New Password
        </h1>
        <div className="w-[406px] mb-6">
          <p className="mb-4">
            Create a strong password to protect your account.
          </p>
        </div>
        <form className="w-[406px]" onSubmit={handleResetPassword}>
          <div className="flex flex-col">
            <label
              className="mb-[12px] text-[16px] font-medium"
              htmlFor="firstName"
            >
              New Password
            </label>
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <OutlinedInput
                placeholder="Enter password"
                id="outlined-adornment-password"
                value={newPassword}
                type={showPassword ? "text" : "password"}
                onChange={(e: any) => setNewPassword(e.currentTarget.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="flex flex-col">
            <label
              className="mb-[12px] mt-[12px] text-[16px] font-medium"
              htmlFor="firstName"
            >
              Confirm password
            </label>
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <OutlinedInput
                placeholder="Re-enter password"
                id="outlined-adornment-password"
                value={confirmNewPassword}
                type={showConfirmPassword ? "text" : "password"}
                onChange={(e: any) =>
                  setConfirmNewPassword(e.currentTarget.value)
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {error && <p className="text-[#DC2626] text-xs mt-2">{error}</p>}
            </FormControl>
          </div>
          <button
            type="submit"
            className="w-full mt-4 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-LawGuardPrimary hover:bg-LawGuardPrimary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-LawGuardPrimary"
          >
            {isPending ? "Loading...." : " Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePasswordForm;
