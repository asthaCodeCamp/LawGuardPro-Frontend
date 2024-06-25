import React, { useEffect, useState } from 'react';
import { TextField, MenuItem, Box } from '@mui/material';

interface Country {
  code: string;
  name: string;
  phone: string;
}

interface PhoneCodePickerProps {
  value: string;
  onChange: (value: string) => void;
}

const countries: Country[] = [
  { code: 'BD', name: 'BD', phone: '+880' },
  { code: 'US', name: 'US', phone: '+1' },
  { code: 'CA', name: 'CA', phone: '+1' },
  { code: 'GB', name: 'UK', phone: '+44' },
  { code: 'AU', name: 'AU', phone: '+61' },
  // Add more countries as needed
];

const PhoneCodePicker: React.FC<PhoneCodePickerProps> = ({ value, onChange }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState<string>(value);

  // console.log({value,phoneNumber});

  useEffect(()=>{
    if(value){
      const number = value?.split(" ")?.[1];
      setPhoneNumber(number);
    }
  },[value])

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const country = countries.find(c => c.code === event.target.value);
    if (country) {
      setSelectedCountry(country);
      onChange(`${country.phone} ${phoneNumber}`);
    }
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {  // Ensure only digits
      setPhoneNumber(value);
      onChange(`${selectedCountry.phone} ${value}`);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <TextField
        select
        value={selectedCountry.code}
        onChange={handleCountryChange}
        variant="outlined"
        sx={{ minWidth: 100 }}
      >
        {countries.map((country) => (
          <MenuItem key={country.code} value={country.code}>
            {country.name}  
          </MenuItem>
        ))}
      </TextField>
      <TextField
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        variant="outlined"
        sx={{ flexGrow: 1 }}
        InputProps={{
          startAdornment: (
            <Box sx={{ paddingRight: 1 }}>{selectedCountry.phone}</Box>
          ),
        }}
      />
    </Box>
  );
};

export default PhoneCodePicker;
