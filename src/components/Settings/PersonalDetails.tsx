import React, { useState, useEffect } from 'react';
import { Button, TextField } from "@mui/material";
import PhoneCodePicker from "../CountryPhoneCodePicker";
import Image from "next/image";
import man from "../../../public/assets/man.png";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSession } from 'next-auth/react';

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

const PersonalDetails: React.FC = () => {
  const [userData, setUserData] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [userDatasesson, setUserDatasesson] = useState<{ email: string } | null>(null);
  console.log(userDatasesson);
  useEffect(() => {
    const fetchUser = async () => {
      const session = await getSession();
      if (session) {
        setUserDatasesson({
          email: session.user?.email || '',
        });
      }
    };
    fetchUser();
  }, []);


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.patch('http://54.203.205.46:5140/api/usersauth/updateuserinfo', userData);
      toast.success('User Update Successful');
    } catch (error) {
      console.error('Failed to update user:', error);
      alert('Failed to update user');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData(prevState => ({ ...prevState, [name]: value }));
  };
  console.log(userData.email);

  return (
    <div className="mb-[32px]">
      <div className="w-full">
        <div className="border-b-[1px] p-8">
          <h1 className="text-[24px]">Personal Details</h1>
          <p className="text-[16px] font-[400] text-[#3D3D3D]">Add or modify your personal information.</p>
        </div>
        <div className="mt-[32px] ml-8">
          <h1 className="text-[16px] font-[600] text-[#191919]">Profile photo</h1>
          <p className="mt-[8px] text-[16px] font-[400] text-[#3D3D3D]">This will be displayed on your profile.</p>
        </div>
        <div className="mt-[16px] flex gap-[16px] ml-8">
          <Image src={man} alt="logo" height={96} width={96} />
          <Button variant="contained" className="capitalize h-[50px] w-[104px] bg-[#F6F6F6] text-black hover:bg-[#F6F6F6] shadow-none my-[23px] text-[14px] font-[600]">Change</Button>
          <Button variant="contained" className="capitalize h-[50px] w-[104px] bg-[#F6F6F6] text-black hover:bg-[#F6F6F6] shadow-none my-[23px] text-[14px] font-[600]">Remove</Button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='flex gap-[16px] mt-8 mx-8'>
            <div className='flex flex-col w-full'>
              <label className='mb-[12px] text-[16px] font-medium' htmlFor="firstName">First Name</label>
              <TextField
                id="firstName"
                name="firstName"
                placeholder='First Name'
                value={userData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col w-full'>
              <label className='mb-[12px] text-[16px] font-medium' htmlFor="lastName">Last Name</label>
              <TextField
                id="lastName"
                name="lastName"
                placeholder='Last Name'
                value={userData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='flex flex-col mt-[16px] mx-8'>
            <label className='mb-[12px] text-[16px] font-medium' htmlFor="email">Email address</label>
            <TextField
              value={userDatasesson?.email}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
          <div className='flex flex-col mt-[16px] mx-8'>
            <label className='mb-[12px] text-[16px] font-medium' htmlFor="phoneNumber">Phone number</label>
            <PhoneCodePicker
            //   value={userData.phoneNumber}
            //   onChange={handlePhoneChange}
            />
          </div>
          <Button className="mt-[16px] h-[56px] bg-[#6B0F99] hover:bg-[#6B0F99] text-[16px] w-[600px] ml-8 capitalize" variant="contained" type="submit">Save Changes</Button>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
