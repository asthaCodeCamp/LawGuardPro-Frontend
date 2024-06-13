import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useRef } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Checkbox, FormControlLabel, IconButton } from "@mui/material";
import { countries } from "@/utilites/Countries";
import Link from "next/link";
import PhoneCodePicker from "@/components/CountryPhoneCodePicker";
import { useForm } from "react-hook-form";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { signIn, useSession } from "next-auth/react";

const signup = () => {
  const { data: session } = useSession<any>();
  console.log(session?.accessToken, "session data");
  const {
    register,
    watch,
    handleSubmit,
    reset,
    setValue,
    getValues,
    setError,
    formState: { errors },
    formState,
  } = useForm({
    mode: "onChange",
  });
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async (data: any) => {
    alert(JSON.stringify(data));
  };
  console.log(errors.password?.message);

  // checker functions

  const numberChecker = (value: string) => {
    return /\d/.test(value);
  };

  const lengthChecker = (value: string) => {
    return value?.length >= 8;
  };

  const caseChecker = (value: string) => {
    return /^(?=.*[a-z])(?=.*[A-Z])/.test(value);
  };

  const specialCharacterChecker = (value: string) => {
    return /[!@#$%^&*(),.?":{}|<>]/.test(value);
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((showConfirm) => !showConfirm);

  const handleMouseDownConfirmPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div className="flex justify-center items-center mt-[116px] mb-[206px]">
      <div className="w-[700px]">
        <div className="mb-[24px]">
          <h1 className="text-[28px] font-[600]">
            Sign up into <span className="text-[#6B0F99]">LawGuard Pro</span>
          </h1>
          <p className="text-[16p] ">
            Enter your details to create account and get started.
          </p>
        </div>
        <div className="flex gap-[16px]">
          <div className="flex flex-col w-full">
            <label
              className="mb-[12px] text-[16px] font-medium"
              htmlFor="firstName"
            >
              First Name
            </label>
            <TextField
              id="demo-helper-text-misaligned"
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              className="mb-[12px] text-[16px] font-medium"
              htmlFor="firstName"
            >
              Last Name
            </label>
            <TextField
              id="demo-helper-text-misaligned"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="flex gap-[16px] mt-[16px]">
          <div className="flex flex-col w-full">
            <label
              className="mb-[12px] text-[16px] font-medium"
              htmlFor="firstName"
            >
              Email address
            </label>
            <TextField
              id="demo-helper-text-misaligned"
              placeholder="Email address"
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              className="mb-[12px] text-[16px] font-medium"
              htmlFor="firstName"
            >
              Phone number
            </label>
            <PhoneCodePicker />
          </div>
        </div>
        <div className="flex gap-[16px] mt-[16px]">
          <div className="">
            <div className="flex flex-col">
              <label
                className="mb-[12px] text-[16px] font-medium"
                htmlFor="firstName"
              >
                Password
              </label>
              <FormControl sx={{ width: "39.5ch" }} variant="outlined">
                <OutlinedInput
                  placeholder="Enter password"
                  id="outlined-adornment-password"
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
                  // name="password"
                  // ref={password}
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
              <FormControl sx={{ width: "39.5ch" }} variant="outlined">
                <OutlinedInput
                  placeholder="Re-enter password"
                  id="outlined-adornment-password"
                  type={showConfirmPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
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
                />
              </FormControl>
            </div>
          </div>
          <div className="bg-[#EEF2FF]  rounded-md px-[20px] py-[28px] w-full justify-center items-center">
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
                <CheckOutlinedIcon className="w-4 mr-[8px]" /> Include a number.
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
                <CheckOutlinedIcon className="w-4 mr-[8px]" /> Include at least
                one special character.
              </span>
            </p>
          </div>
        </div>
        <div className="mt-[12px] mb-[12px]">
          <div className="flex flex-col">
            <label
              className="mb-[12px] text-[16px] font-medium"
              htmlFor="firstName"
            >
              Country residency
            </label>
            <Autocomplete
              className="w-full"
              id="country-select-demo"
              sx={{ width: 300 }}
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="20"
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    alt=""
                  />
                  {option.label} ({option.code})
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Select country"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </div>
          <div className="flex">
            <FormControlLabel control={<Checkbox defaultChecked />} label="" />
            <p className="mt-2 ml-0 ">
              I have agree to the{" "}
              <span className="text-[#6B0F99]">Terms of Service</span> and{" "}
              <span className="text-[#6B0F99]">Privacy Policy.</span>
            </p>
          </div>
          <div className="mt-6">
            <Button
              className="w-full py-3.5 bg-[#6B0F99] hover:bg-[#6B0F99] font-[600] text-[16px] hover:shadow-none shadow-none"
              variant="contained"
            >
              Sign up
            </Button>
          </div>

          <div className="mt-[12px]">
            <Button
              onClick={() => signIn("google")}
              className="w-full h-[52px] bg-[#FFFFFF] text-[#191919] font-[600] text-[16px] outline outline-1 outline-[#d1d1d1] "
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
          <div className="justify-center items-center text-center flex mt-[32px]">
            {" "}
            <p>Already have an account?</p>{" "}
            <Link className="text-[#6B0F99]" href={"/login"}>
              Log in
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default signup;
