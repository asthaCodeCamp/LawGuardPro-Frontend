import React, { useEffect, useState } from "react";
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
import { toast } from "react-toastify";
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
  const [selectedCountry,setSelectedCountry] = useState<any>(null);
  const [selectedCity,setSelectedCity] = useState<any>(null);
  const [refresh, setRefresh] = useState<boolean>(false);

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
      const data = response.data;
      setFormData({
        billingName: data.billingName,
        addressLine1: data.addressLine1,
        addressLine2: data.addressLine2,
        town: data.town,
        postalCode: data.postalCode,
        country: data.country,
      })

      setRefresh(!refresh);

      const town = cities.find(item => item.city?.toLowerCase() === dataToSubmit.town?.toLowerCase())
      setSelectedCity(town)

      const country = countries.find(item => item.label?.toLowerCase() === dataToSubmit.country?.toLowerCase())
      setSelectedCountry(country)

    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        toast.error(`Axios error: ${error.response?.data || error.message}`);;
      } else {
        toast.error(`Unexpected error: ${error.message}`);
      }
    }
  };

  const getAddress = async () => {
    const response = await axios.get(
      "http://54.203.205.46:5140/api/address/get/billing",
      {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }
    );
    const data = response.data;
    console.log(data);
    setFormData({
      billingName: data.billingName,
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2,
      town: data.town,
      postalCode: data.postalCode,
      country: data.country,
    })
  }

  useEffect(() => {
    getAddress();
  }, [session])

  useEffect(() => {
    if(formData.country){
      const country = countries.find(item => item.label?.toLowerCase() === formData.country?.toLowerCase())
    setSelectedCountry(country)
    }
  }, [session,refresh, formData])

  useEffect(() => {
    if(formData.town){
      const town = cities.find(item => item.city?.toLowerCase() === formData.town?.toLowerCase())
    setSelectedCity(town)
    }
  }, [session, refresh, formData])



  console.log({selectedCity, selectedCountry, formData});



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
        value={selectedCity}
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
        value={selectedCountry}
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
            // value={countries.find(item => item.label.toLowerCase() === formData.country.toLowerCase())}
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
