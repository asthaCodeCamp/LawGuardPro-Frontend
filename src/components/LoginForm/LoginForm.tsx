import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import Link from "next/link";
import { useRouter } from "next/router";
// import { logIn } from "@/services/authentication/authentication.service";
import { signIn } from "next-auth/react";
import { CleaningServices } from "@mui/icons-material";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const validateEmail = (email: string) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      //alert("Valid email address!");
      //document.form1.text1.focus();
      return true;
    } else {
      // alert("You have entered an invalid email address!");
      //document.form1.text1.focus();
      return false;
    }
  };

  const handleLogin = async () => {
    // signIn("credentials", {
    //   userName: "jubair@gmail.com",
    //   password: "Jubair128@",
    // }).then(() => router.push("/"));

    if (email === "" || password === "") {
      setError("Email or Password can't be empty");
      setEmail("");
      setPassword("");
    } else if (!validateEmail(email)) {
      setError("Invalid email address");
      setEmail("");
      setPassword("");
    } else {
      try {
        const isLoggedin = await signIn("credentials", {
          userName: email,
          password: password,
          redirect:false
          // callbackUrl: "/",
        });

        // alert(`Hello == ${isLoggedin}`);
        // console.log("logged in info from user === ", isLoggedin.error);

        if (!isLoggedin?.ok) {
          // toast.error("Incorrect Login Details!!");
          setError("Incorrect email or password");
          setEmail("");
          setPassword("");
        } else {
          // toast.success("Login Successful!!");
          console.log("Login Successful");
          router.push("/");
        }
      } catch (error) {
        // toast.success(error);
        console.log("Error occured");
      }
    }

    // logIn({ userName: "b@b.com", password: "@0Ne@@@@" });

  };
  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };
  return (
    <Box className="flex justify-center items-center mb-10 px-3">
      <Box className="w-[342px] mt-[116px]">
        <Box className=" h-[74px] mb-8">
          <h1 className="font-[600] text-[28px] leading-[42px]">
            Login into
            <span className="ms-2 text-[#6B0F99]">LawGuard Pro</span>
          </h1>
          <p>Please enter your details to login.</p>
        </Box>
        <Box className="h-60 mb-8">
          <FormControl sx={{ width: "100%", marginBottom: "16px" }}>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>

            <OutlinedInput
              type="email"
              id="email"
              value={email}
              placeholder="Enter email address"
              className="rounded-lg w-100 mb-4"
              onChange={(e) => {
                setEmail(e.currentTarget.value);
                validateEmail(e.currentTarget.value);
              }}
              required
            />
            {email !== "" && !validateEmail(email) && (
              <p className="text-[#DC2626] text-xs">Invalid email format</p>
            )}
          </FormControl>

          <FormControl sx={{ width: "100%", marginBottom: "16px" }}>
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
              className="rounded-lg w-100"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOutlinedIcon className="text-[#3D3D3D]" />
                    ) : (
                      <VisibilityOffOutlinedIcon className="text-[#3D3D3D]" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
              required
            />
          </FormControl>
          {(email === "" || password === "") && (
            <p className="text-[#DC2626] text-xs">{error}</p>
          )}
          <Link
            href="/reset-password"
            className="mb-8 font-[500] text-[16px] leading-6 text-[#6B0F99]"
          >
            Forgot password?
          </Link>
        </Box>
        <Box className="h-32 mb-8">
          <Button
            className="mb-4 w-full h-14 bg-[#6B0F99] rounded-lg hover:bg-[#6B0F93] font-[600] text-[16px] capitalize text-white"
            onClick={handleLogin}
          >
            Continue
          </Button>
          <Button
            className="w-full h-14 bg-[#FFFFFF] rounded-lg text-[#191919] font-[600] text-[16px] outline outline-1 outline-[#d1d1d1] capitalize"
            onClick={handleGoogleLogin}
          >
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
            <span className="ml-3"> Continue with Google</span>
          </Button>
        </Box>
        <Box className="w-64 h-6 mx-auto text-[16px] font-[400] leading-6 mb-8">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-[#6B0F99]">
            Sign up
          </Link>
        </Box>
        <Box className="text-[14px] font-[400] leading-[21px] mx-2">
          Check our{" "}
          <span className="font-bold underline cursor-pointer">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="font-bold underline cursor-pointer">
            Privacy Policy.
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
