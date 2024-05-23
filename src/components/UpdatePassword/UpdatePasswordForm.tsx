import { FormControl, IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import React from 'react';

const UpdatePasswordForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickConfirmPassword = () => setShowConfirmPassword((show) => !show);


    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg px-8 py-6 max-w-lg w-full">
        <h1 className="text-[28px] font-semibold mb-4">Choose a New Password</h1>
        <div className="w-[406px] mb-6">
          <p className="mb-4">
          Create a strong password to protect your account.
          </p>
        </div>
        <form className="w-[406px]">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
            New password
            </label>
            <TextField
              type="email"
              id="email"
              className="shadow-sm rounded-md w-full  border border-gray-300 focus:outline-none focus:ring-LawGuardPurple focus:border-LawGuardPurple"
              required
              placeholder="Enter new password"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
            Confirm password
            </label>
            <TextField
              type="email"
              id="email"
              className="shadow-sm rounded-md w-full  border border-gray-300 focus:outline-none focus:ring-LawGuardPurple focus:border-LawGuardPurple"
              required
              placeholder="Re-enter new password"
            />
          </div>
          <div className='flex flex-col'>
                            <label className='mb-[12px] text-[16px] font-medium' htmlFor="firstName">Password</label>
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <OutlinedInput
                                    placeholder='Enter password'
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff/> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-[12px] mt-[12px] text-[16px] font-medium' htmlFor="firstName">Confirm password</label>
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <OutlinedInput
                                    placeholder='Re-enter password'
                                    id="outlined-adornment-password"
                                    type={showConfirmPassword ? 'text' : 'password'}
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
                            </FormControl>
                        </div>
          <button
            type="submit"
            className="w-full mt-4 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-LawGuardPrimary hover:bg-LawGuardPrimary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-LawGuardPrimary"
          >
            Update
          </button>
          
        </form>
      </div>
    </div>
    );
};

export default UpdatePasswordForm;