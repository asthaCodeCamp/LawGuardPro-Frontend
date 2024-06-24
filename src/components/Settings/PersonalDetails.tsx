import React, { useEffect, useState } from 'react';
import { Button, TextField, CircularProgress } from "@mui/material";
import PhoneCodePicker from "../CountryPhoneCodePicker";
import Image from "next/image";
import man from "../../../public/assets/man.png";
import useUserData from '../../services/PersonalDetails/useUserData';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const PersonalDetails: React.FC = () => {
  const { userData, fetchedUserData, setUserData, updateUser } = useUserData();
  const { data,update } = useSession();
  // const router = useRouter();
  console.log(data);
  const [loading, setLoading] = useState(false);
  // console.log(fetchedUserData);
  useEffect(() => {
    if (fetchedUserData) {
      const { firstName, lastName, phoneNumber, email } = fetchedUserData;
      setUserData({ firstName, lastName, phoneNumber, email });
    }
  }, [fetchedUserData, setUserData]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await updateUser(userData);
      // console.log(res);
      setUserData({
        firstName: res.firstname,
        lastName: res.lastName,
        phoneNumber: res.phoneNumber,
        email: res.email
      });
      // router.reload();
      update((prev:any) => ({...prev, user: {firstName: res.firstname,
        lastName: res.lastName,
        email: res.email}}))

    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData(prevState => ({ ...prevState, [name]: value }));
  };

  const handlePhoneChange = (value: string) => {
    setUserData(prevState => ({ ...prevState, phoneNumber: value }));
  };

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
                value={userData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col w-full'>
              <label className='mb-[12px] text-[16px] font-medium' htmlFor="lastName">Last Name</label>
              <TextField
                id="lastName"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='flex flex-col mt-[16px] mx-8'>
            <label className='mb-[12px] text-[16px] font-medium' htmlFor="email">Email address</label>
            <TextField
              id="email"
              name="email"
              value={userData.email}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
          <div className='flex flex-col mt-[16px] mx-8'>
            <label className='mb-[12px] text-[16px] font-medium' htmlFor="phoneNumber">Phone number</label>
            <PhoneCodePicker
              value={userData.phoneNumber || ''}
              onChange={handlePhoneChange}
            />
          </div>
          <Button
            className="mt-[16px] h-[56px] bg-[#6B0F99] hover:bg-[#6B0F99] text-[16px] w-[600px] ml-8 capitalize"
            variant="contained"
            type="submit"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Save Changes'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
