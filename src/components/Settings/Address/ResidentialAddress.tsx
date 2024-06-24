import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  OutlinedInput,
  Button,
} from "@mui/material";
import axios from "axios";
import { useSession } from "next-auth/react";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  addressLine1: string;
  addressLine2: string;
  town: string;
  postalCode: number | string;
  country: string;
}

const ResidentialAddress: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    addressLine1: "",
    addressLine2: "",
    town: "",
    postalCode: "",
    country: "",
  });

  const { data: session } = useSession();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === "postalCode" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const sessionToken = session?.accessToken;

      if (!sessionToken) {
        throw new Error("Session token not found.");
      }

      const dataToSubmit = {
        addressType: "Residence",
        addressLine1: formData.addressLine1,
        addressLine2: formData.addressLine2,
        town: formData.town,
        postalCode: formData.postalCode,
        country: formData.country,
      };

      console.log("Data to submit:", dataToSubmit);

      const response = await axios.post(
        "http://54.203.205.46:5140/api/address/create/residence",
        dataToSubmit,
        {
          headers: {
            Authorization: `Bearer ${sessionToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Form submitted successfully!");

      console.log("Form submitted successfully:", response.data);

      // Reset form fields
      const data = response.data;
    setFormData({
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2,
      town: data.town,
      postalCode: data.postalCode || 0,
      country: data.country,
    })

    } catch (error:any) {
      if (axios.isAxiosError(error)) {
        toast.error(`Axios error: ${error.response?.data || error.message}`);
        console.error("Axios error:", error.response?.data || error.message);
      } else {
        toast.error(`Unexpected error: ${error.message}`);
        console.error("Unexpected error:", error);
      }
    }
  };

  const getAddress = async () => {
    const response = await axios.get(
      "http://54.203.205.46:5140/api/address/get/residence",
      {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }
    );
    const data = response.data;
    setFormData({
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2,
      town: data.town,
      postalCode: data.postalCode || 0,
      country: data.country,
    })
  }

  useEffect(()=>{
    getAddress();
  },[session])

  return (
    <div className="flex flex-col">
      <FormControl sx={{ width: "48%", height: "92px", marginBottom: "24px" }}>
        <FormLabel
          htmlFor="addressLine1"
          className="block text-[16px] text-[#191919] font-medium mb-3 h-6"
        >
          Address line 1
        </FormLabel>
        <OutlinedInput
          type="text"
          id="addressLine1"
          placeholder="Enter address 1"
          className="rounded-lg w-100 h-14"
          value={formData.addressLine1}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl sx={{ width: "48%", height: "92px", marginBottom: "24px" }}>
        <FormLabel
          htmlFor="addressLine2"
          className="block text-[16px] text-[#191919] font-medium mb-3 h-6"
        >
          Address line 2
        </FormLabel>
        <OutlinedInput
          type="text"
          id="addressLine2"
          placeholder="Enter address 2 (optional)"
          className="rounded-lg w-100 h-14"
          value={formData.addressLine2}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl sx={{ width: "48%", height: "92px", marginBottom: "24px" }}>
        <FormLabel
          htmlFor="town"
          className="block text-[16px] text-[#191919] font-medium mb-3 h-6"
        >
          Town
        </FormLabel>
        <OutlinedInput
          type="text"
          id="town"
          placeholder="Enter Town Name"
          className="rounded-lg w-100 h-14"
          value={formData.town}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl sx={{ width: "48%", height: "92px", marginBottom: "24px" }}>
        <FormLabel
          htmlFor="postalCode"
          className="block text-[16px] text-[#191919] font-medium mb-3 h-6"
        >
          Postal code
        </FormLabel>
        <OutlinedInput
          type="number"
          id="postalCode"
          placeholder="Enter postal code"
          className="rounded-lg w-100 h-14"
          value={formData.postalCode}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl sx={{ width: "48%", height: "92px", marginBottom: "24px" }}>
        <FormLabel
          htmlFor="country"
          className="block text-[16px] text-[#191919] font-medium mb-3 h-6"
        >
          Country
        </FormLabel>
        <OutlinedInput
          type="text"
          id="country"
          placeholder="Enter Country"
          className="rounded-lg w-100 h-14"
          value={formData.country}
          onChange={handleChange}
        />
      </FormControl>
      <Button
        className="w-[147px] h-14 rounded-lg flex justify-center items-center bg-[#6B0F99] hover:bg-[#6B0F99] font-[600] text-[16px] hover:shadow-none shadow-none capitalize mb-10"
        variant="contained"
        onClick={handleSubmit}
      >
        Save changes
      </Button>
    </div>
  );
};

export default ResidentialAddress;
