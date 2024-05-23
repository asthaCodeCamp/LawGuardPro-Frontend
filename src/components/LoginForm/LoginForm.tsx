import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    // e.preventDefault();

    console.log("Email === ", email);
    console.log("Password === ", password);
  };
  const handleGoogleLogin = () => {
    // e.preventDefault();

    console.log("I am from google");
  };
  return (
    <div className="flex justify-center items-center mb-10">
      <div className="w-[342px] mt-[116px]">
        <div className=" h-[74px] mb-8">
          <h1 className="font-[600] text-[28px] leading-[42px]">
            Login into
            <span className="ms-2 text-[#6B0F99]">LawGuard Pro</span>
          </h1>
          <p>Please enter your details to login.</p>
        </div>

        <div className="h-60 mb-8">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>

          <TextField
            id="email"
            value={email}
            placeholder="Enter email address"
            style={{ width: "100%", marginBottom: "16px" }}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />

          <FormControl sx={{ width: "100%", marginBottom: "16px" }}>
            {/* <InputLabel htmlFor="password">Password</InputLabel> */}
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <OutlinedInput
              placeholder="Enter password"
              id="password"
              value={password}
              type={showPassword ? "text" : "password"}
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
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
          </FormControl>

          <h6 className="mb-[32px] font-[500] text-[16px] leading-[24px] text-[#6B0F99]">
            Forgot password?
          </h6>
        </div>
        <div className="h-32 mb-8">
          <button
            className="mb-4 w-full h-[56px] bg-[#6B0F99] hover:bg-[#6B0F93] font-[600] text-[16px] capitalize text-white"
            onClick={handleLogin}
            // variant="contained"
          >
            Continue
          </button>
          <Button
            className="w-full h-[56px] bg-[#FFFFFF] text-[#191919] font-[600] text-[16px] outline outline-1 outline-[#d1d1d1] capitalize"
            onClick={handleGoogleLogin}
            // variant="outlined"
          >
            <>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                  fill="#FFC107"
                />
                <path
                  d="M3.65302 7.3455L6.93851 9.755C7.82752 7.554 9.98052 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C8.65902 2 5.32802 4.1685 3.65302 7.3455Z"
                  fill="#FF3D00"
                />
                <path
                  d="M12.5 21.9999C15.083 21.9999 17.43 21.0114 19.2045 19.4039L16.1095 16.7849C15.0717 17.574 13.8037 18.0009 12.5 17.9999C9.89897 17.9999 7.69047 16.3414 6.85847 14.0269L3.59747 16.5394C5.25247 19.7779 8.61347 21.9999 12.5 21.9999Z"
                  fill="#4CAF50"
                />
                <path
                  d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.7571 15.1082 17.0467 16.0766 16.108 16.7855L16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                  fill="#1976D2"
                />
              </svg>
            </>
            <span className="ml-[12px]"> Continue with Google</span>
          </Button>
        </div>

        <div className="w-64 h-6 mx-auto text-[16px] font-[400] leading-6 mb-8">
          Don’t have an account? <span className="text-[#6B0F99]">Sign up</span>
        </div>
        <div className="text-[15px] font-[400] leading-[21px] mx-2">
          Check our <span className="font-bold">Terms of Service</span> and{" "}
          <span className="font-bold">Privacy Policy.</span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
