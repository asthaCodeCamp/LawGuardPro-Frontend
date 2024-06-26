import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "sonner";
import {
  TextField,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import Link from "next/link";
import PhoneCodePicker from "../../components/CountryPhoneCodePicker";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  country: string;
  terms: boolean;
}

const Signup: React.FC = () => {
  const [isLoading, setLoaing] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    reset,
    getValues,
    setValue,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
  });
  const router = useRouter();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data: FormData) => {
    try {
      setLoaing(true);
      const response = await fetch(
        "https://lawguardpro-api.saams.xyz/api/usersauth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (response.ok) {
        toast.success("Signup successful! Now, Login your account");
        reset();
        router.replace("/login");
      } else {
        toast.error(`Signup failed: ${result.message}`);
      }
    } catch (error: any) {
      toast.error("Error: " + error.message);
    } finally {
      setLoaing(false);
    }
  };

  // Password visibility state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password validation checks
  const numberChecker = (value: string) => /\d/.test(value);
  const lengthChecker = (value: string) => value?.length >= 8;
  const caseChecker = (value: string) => /^(?=.*[a-z])(?=.*[A-Z])/.test(value);
  const specialCharacterChecker = (value: string) =>
    /[!@#$%^&*(),.?":{}|<>]/.test(value);

  return (
    <div className="flex justify-center items-center mt-[116px] mb-[206px]">
      <div className="w-[700px]">
        <div className="mb-[24px]">
          <h1 className="text-[28px] font-[600]">
            Sign up into <span className="text-[#6B0F99]">LawGuard Pro</span>
          </h1>
          <p className="text-[16px]">
            Enter your details to create account and get started.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-[16px]">
            <div className="flex flex-col w-full">
              <label
                className="mb-[12px] text-[16px] font-medium"
                htmlFor="firstName"
              >
                First Name
              </label>
              <TextField
                id="firstName"
                placeholder="First Name"
                {...register("firstName", {
                  required: "First Name is required",
                })}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                className="mb-[12px] text-[16px] font-medium"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <TextField
                id="lastName"
                placeholder="Last Name"
                {...register("lastName", { required: "Last Name is required" })}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
              />
            </div>
          </div>
          <div className="flex gap-[16px] mt-[16px]">
            <div className="flex flex-col w-full">
              <label
                className="mb-[12px] text-[16px] font-medium"
                htmlFor="email"
              >
                Email address
              </label>
              <TextField
                id="email"
                placeholder="Email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                className="mb-[12px] text-[16px] font-medium"
                htmlFor="phone"
              >
                Phone number
              </label>
              <PhoneCodePicker
                value={getValues("phone")} // Assuming 'phone' is a field in your FormData
                onChange={(value: string) => setValue("phone", value)} // Assuming 'setValue' is defined
              />
            </div>
          </div>
          <div className="flex gap-[16px] mt-[16px]">
            <div className="">
              <div className="flex flex-col">
                <label
                  className="mb-[12px] text-[16px] font-medium"
                  htmlFor="password"
                >
                  Password
                </label>
                <FormControl sx={{ width: "39.5ch" }} variant="outlined">
                  <OutlinedInput
                    placeholder="Enter password"
                    id="password"
                    {...register("password", {
                      required: "You must specify a password",
                      validate: {
                        minLength: (value) =>
                          value.length >= 8 ||
                          "Password must have at least 8 characters",
                        hasNumber: (value) =>
                          /\d/.test(value) ||
                          "Password should contain at least one number",
                        hasUpperLowerCase: (value) =>
                          /^(?=.*[a-z])(?=.*[A-Z])/.test(value) ||
                          "Password should contain at least one uppercase and lowercase letter",
                        hasSpecialChar: (value) =>
                          /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                          "Password should contain at least one special character",
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={(event) => event.preventDefault()}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    error={!!errors.password}
                  />
                </FormControl>
              </div>
              <div className="flex flex-col">
                <label
                  className="mb-[12px] mt-[12px] text-[16px] font-medium"
                  htmlFor="confirmPassword"
                >
                  Confirm password
                </label>
                <FormControl sx={{ width: "39.5ch" }} variant="outlined">
                  <OutlinedInput
                    placeholder="Re-enter password"
                    id="confirmPassword"
                    {...register("confirmPassword", {
                      required: "You must confirm your password",
                      validate: (value) =>
                        value === getValues("password") ||
                        "Passwords do not match",
                    })}
                    type={showConfirmPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          onMouseDown={(event) => event.preventDefault()}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    error={!!errors.confirmPassword}
                  />
                </FormControl>
              </div>
            </div>
            <div className="bg-[#EEF2FF] rounded-md px-[20px] py-[28px] w-full justify-center items-center">
              <h1 className="text-[13px] font-[500]">Your password must: </h1>
              <p
                className={`${
                  getValues("password") || errors?.password?.message
                    ? lengthChecker(getValues("password")) === false
                      ? "text-red-400"
                      : "text-green-400"
                    : "text-black"
                }`}
              >
                <span className="text-[11px] font-[400]">
                  <CheckOutlinedIcon className="w-4 mr-[8px]" /> Be at least 8
                  characters.
                </span>
              </p>
              <p
                className={`${
                  getValues("password") || errors?.password?.message
                    ? numberChecker(getValues("password")) === false
                      ? "text-red-400"
                      : "text-green-400"
                    : "text-black"
                }`}
              >
                <span className="text-[11px] font-[400]">
                  <CheckOutlinedIcon className="w-4 mr-[8px]" /> Include a
                  number.
                </span>
              </p>
              <p
                className={`${
                  getValues("password") || errors?.password?.message
                    ? caseChecker(getValues("password")) === false
                      ? "text-red-400"
                      : "text-green-400"
                    : "text-black"
                }`}
              >
                <span className="text-[11px] font-[400]">
                  <CheckOutlinedIcon className="w-4 mr-[8px]" /> Have uppercase
                  and lowercase letters.
                </span>
              </p>
              <p
                className={`${
                  getValues("password") || errors?.password?.message
                    ? specialCharacterChecker(getValues("password")) === false
                      ? "text-red-400"
                      : "text-green-400"
                    : "text-black"
                }`}
              >
                <span className="text-[11px] font-[400]">
                  <CheckOutlinedIcon className="w-4 mr-[8px" /> Include at least
                  one special character.
                </span>
              </p>
            </div>
          </div>
          <div className="mt-[12px] mb-[12px]">
            <div className="flex">
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    {...register("terms", {
                      required: "You must agree to the terms",
                    })}
                  />
                }
                label=""
              />
              <p className="mt-2 ml-0">
                I have agree to the{" "}
                <span className="text-[#6B0F99]">Terms of Service</span> and{" "}
                <span className="text-[#6B0F99]">Privacy Policy.</span>
              </p>
            </div>
            <div className="mt-6">
              <Button
                type="submit"
                className="w-full py-3.5 bg-[#6B0F99] hover:bg-[#6B0F99] font-[600] text-[16px] hover:shadow-none shadow-none"
                variant="contained"
              >
                {isLoading ? "Loading...." : "Sign up"}
              </Button>
            </div>
          </div>
        </form>
        <div className="justify-center items-center text-center flex mt-[32px]">
          <p>Already have an account?</p>
          <Link href={"/login"}>
            <span className="text-[#6B0F99]">Log in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
