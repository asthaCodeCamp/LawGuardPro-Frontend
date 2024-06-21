import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cities } from "../../../utilites/Cities";
import { countries } from "../../../utilites/Countries";

interface FormData {
  billingName: string;
  addressLine1: string;
  addressLine2: string;
  town: string;
  postalCode: number | string;
  country: string;
}

const BillingAddress: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    billingName: "",
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
        billingName: formData.billingName,
        addressLine1: formData.addressLine1,
        addressLine2: formData.addressLine2,
        town: formData.town,
        postalCode: formData.postalCode,
        country: formData.country,
      };

      console.log("Data to submit:", dataToSubmit);

      const response = await axios.post(
        "http://54.203.205.46:5140/api/address/create/billing",
        dataToSubmit,
        {
          headers: {
            Authorization: `Bearer ${sessionToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Bill submitted successfully!");


      // Reset form fields
      setFormData({
        billingName: "",
        addressLine1: "",
        addressLine2: "",
        town: "",
        postalCode: "",
        country: "",
      });

    } catch (error:any) {
      if (axios.isAxiosError(error)) {
        toast.error(`Axios error: ${error.response?.data || error.message}`);;
      } else {
        toast.error(`Unexpected error: ${error.message}`);
      }
    }
  };

  return (
    <div className="flex flex-col">
  
      <FormControl sx={{ width: "48%", height: "92px", marginBottom: "24px" }}>
        <FormLabel
          htmlFor="billing-name"
          className="block text-[16px] text-[#191919] font-medium mb-3 h-6"
        >
          Billing name
        </FormLabel>
        <OutlinedInput
          type="text"
          id="billingName"
          placeholder="Enter name"
          className="rounded-lg w-100 h-14"
          value={formData.billingName}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl sx={{ width: "48%", height: "92px", marginBottom: "24px" }}>
        <FormLabel
          htmlFor="address1"
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
          htmlFor="address2"
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
        <Autocomplete
          className="w-full"
          id="town"
          sx={{ width: 300 }}
          options={cities}
          autoHighlight
          getOptionLabel={(option: any) => option.city}
          renderOption={(props: any, option: any) => (
            <Box component="li" {...props}>
              {option.city}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Select town or city"
              inputProps={{ ...params.inputProps }}
            />
          )}
          onChange={(event, value) => setFormData((prev) => ({ ...prev, town: value?.city || "" }))}
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
          Country residency
        </FormLabel>
        <Autocomplete
          className="w-full"
          id="country"
          sx={{ width: 300 }}
          options={countries}
          autoHighlight
          getOptionLabel={(option: any) => option.label}
          renderOption={(props: any, option: any) => (
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
              inputProps={{ ...params.inputProps }}
            />
          )}
          onChange={(event, value) => setFormData((prev) => ({ ...prev, country: value?.label || "" }))}
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

export default BillingAddress;
