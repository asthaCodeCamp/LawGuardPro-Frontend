import { TextField } from "@mui/material";
import React from "react";

const ResetPasswordRequestForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg px-8 py-6 max-w-lg w-full">
        <h1 className="text-2xl font-semibold mb-4">Reset Password</h1>
        <div className="w-[463px] mb-6">
          <p className="mb-4">
            Enter the email address you signed up with. We’ll send you an email
            with a link to reset your password.
          </p>
        </div>
        <form className="w-[463px]">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <TextField
              type="email"
              id="email"
              className="shadow-sm rounded-md w-full  border border-gray-300 focus:outline-none focus:ring-LawGuardPurple focus:border-LawGuardPurple"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-LawGuardPrimary hover:bg-LawGuardPrimary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-LawGuardPrimary"
          >
            Send Reset Link
          </button>
          <div className="text-center mt-8">
            <button className="text-xl font-semibold" type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordRequestForm;
