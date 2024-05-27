import { Button, TextField } from "@mui/material";
import PhoneCodePicker from "../CountryPhoneCodePicker";
import Image from "next/image";
import man from "../../../public/assets/man.png"

const PersonalDetails = () => {
    return (  
        <div>
            
            <div className="m-[32px]">
                <div>
                    <h1 className="text-[24px]">Personal Details</h1>
                    <p className="text-[16px] font-[400] text-[#3D3D3D]">Add or modify your personal information.</p>
                </div>
                <div className="mt-[32px]">
                    <h1 className="text-[16px] font-[600] text-[#191919]">Profile photo</h1>
                    <p className="mt-[8px] text-[16px] font-[400] text-[#3D3D3D]">This will be displayed on your profile.</p>
                </div>
                <div className="mt-[16px] flex gap-[16px]">
                    <Image src={man} alt="logo" height={96} width={96} />
                    <Button variant="contained" className="capitalize h-[50px] w-[104px] bg-[#F6F6F6] text-black hover:bg-[#F6F6F6] shadow-none my-[23px] text-[14px] font-[600]">Change</Button>
                    <Button variant="contained" className="capitalize h-[50px] w-[104px] bg-[#F6F6F6] text-black hover:bg-[#F6F6F6] shadow-none  my-[23px] text-[14px] font-[600]">Remove</Button>

                </div>
                <div className='flex gap-[16px] mt-[32px]'>
                    <div className='flex flex-col w-full '>
                        <label className='mb-[12px] text-[16px] font-medium' htmlFor="firstName">First Name</label>
                        <TextField
                            id="demo-helper-text-misaligned"
                            placeholder='First Name'
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='mb-[12px] text-[16px] font-medium' htmlFor="firstName">Last Name</label>
                        <TextField
                            id="demo-helper-text-misaligned"
                            placeholder='Last Name'
                        />
                    </div>

                </div>
                <div className='flex flex-col w-full mt-[16px]'>
                    <label className='mb-[12px] text-[16px] font-medium' htmlFor="firstName">Email address</label>
                    <TextField
                        id="demo-helper-text-misaligned"
                        placeholder='Email address'
                    />
                </div>
                <div className='flex flex-col w-full mt-[16px]'>
                        <label className='mb-[12px] text-[16px] font-medium' htmlFor="firstName">Phone number</label>
                        <PhoneCodePicker />
                 </div>
                 <Button className="mt-[16px] h-[56px] w-[147px] bg-[#6B0F99] hover:bg-[#6B0F99] text-[16px] w-[600] capitalize" variant="contained">Save Changes</Button>

            </div>
            
        </div>
    );
}
export default PersonalDetails;