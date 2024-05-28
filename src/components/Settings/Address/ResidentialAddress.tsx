import {
  Autocomplete,
  Box,
  Button,
  FilledTextFieldProps,
  FormControl,
  FormLabel,
  OutlinedInput,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextField,
  TextFieldVariants,
} from "@mui/material";
import { JSX } from "react";
import { countries } from "@/utilites/Countries";
import { cities } from "@/utilites/Cities";

const ResidentialAddress = () => {
  return (
    <div>
      <FormControl
        sx={{
          width: "100%",
          height: "92px",
          marginBottom: "24px",
        }}
      >
        <FormLabel
          htmlFor="address1"
          className="block text-[16px] text-[#191919] font-medium mb-3 h-6"
        >
          Address line 1
        </FormLabel>

        <OutlinedInput
          type="text"
          id="address1"
          placeholder="Enter address 1"
          className="rounded-lg w-100 h-14"
        />
      </FormControl>
      <FormControl
        sx={{
          width: "100%",
          height: "92px",
          marginBottom: "24px",
        }}
      >
        <FormLabel
          htmlFor="address2"
          className="block text-[16px] text-[#191919] font-medium mb-3 h-6"
        >
          Address line 2
        </FormLabel>

        <OutlinedInput
          type="text"
          id="address2"
          placeholder="Enter address 2 (optional)"
          className="rounded-lg w-100 h-14"
        />
      </FormControl>
      <FormControl
        sx={{
          width: "100%",
          height: "92px",
          marginBottom: "24px",
        }}
      >
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
          renderInput={(
            params: JSX.IntrinsicAttributes & {
              variant?: TextFieldVariants | undefined;
            } & Omit<
                | OutlinedTextFieldProps
                | FilledTextFieldProps
                | StandardTextFieldProps,
                "variant"
              >
          ) => (
            <TextField
              {...params}
              placeholder="Select country"
              inputProps={{
                ...params.inputProps,
              }}
            />
          )}
        />
      </FormControl>
      <FormControl
        sx={{
          width: "100%",
          height: "92px",
          marginBottom: "24px",
        }}
      >
        <FormLabel
          htmlFor="city"
          className="block text-[16px] text-[#191919] font-medium mb-3 h-6"
        >
          Town/city
        </FormLabel>
        <Autocomplete
          className="w-full"
          id="city"
          sx={{ width: 300 }}
          options={cities}
          autoHighlight
          getOptionLabel={(option: any) => option.city}
          renderOption={(props: any, option: any) => (
            <Box component="li" {...props}>
              {option.city}
            </Box>
          )}
          renderInput={(
            params: JSX.IntrinsicAttributes & {
              variant?: TextFieldVariants | undefined;
            } & Omit<
                | OutlinedTextFieldProps
                | FilledTextFieldProps
                | StandardTextFieldProps,
                "variant"
              >
          ) => (
            <TextField
              {...params}
              placeholder="Select town or city"
              inputProps={{
                ...params.inputProps,
              }}
            />
          )}
        />
      </FormControl>
      <FormControl
        sx={{
          width: "100%",
          height: "92px",
          marginBottom: "24px",
        }}
      >
        <FormLabel
          htmlFor="postal-code"
          className="block text-[16px] text-[#191919] font-medium mb-3 h-6"
        >
          Postal code
        </FormLabel>
        <OutlinedInput
          type="text"
          id="postal-code"
          placeholder="Enter postal code"
          className="rounded-lg w-100 h-14"
        />
      </FormControl>
      <Button
        className="w-[147px] h-14 rounded-lg flex justify-center items-center bg-[#6B0F99] hover:bg-[#6B0F99] font-[600] text-[16px] hover:shadow-none shadow-none capitalize mb-10"
        variant="contained"
      >
        Save changes
      </Button>
    </div>
  );
};

export default ResidentialAddress;
