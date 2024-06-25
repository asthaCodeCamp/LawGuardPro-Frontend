import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

interface FormData {
  addressLine1: string;
  addressLine2: string;
  town: string;
  postalCode: number | string;
  country: string;
}

const useResidentialAddress = () => {
  const [formData, setFormData] = useState<FormData>({
    addressLine1: "",
    addressLine2: "",
    town: "",
    postalCode: "",
    country: "",
  });

  const { data: session } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!session) {
          throw new Error("Session data is not available.");
        }

        const sessionToken = session?.accessToken;

        if (!sessionToken) {
          throw new Error("Session token not found.");
        }

        const response = await axios.get(
          "https://lawguardpro-api.saams.xyz/api/address/get/residence",
          {
            headers: {
              Authorization: `Bearer ${sessionToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        setFormData(response.data);
      } catch (error: any) {
        toast.error(
          `Error fetching data: ${error.response?.data || error.message}`
        );
        console.error("Error fetching data:", error);
      }
    };

    if (session) {
      fetchData();
    }
  }, [session]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === "postalCode" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (!session) {
        throw new Error("Session data is not available.");
      }

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
        "https://lawguardpro-api.saams.xyz/api/address/create/residence",
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
      setFormData({
        addressLine1: "",
        addressLine2: "",
        town: "",
        postalCode: "",
        country: "",
      });
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data || error.message;
        toast.error(`Axios error: ${errorMessage}`);
        console.error("Axios error:", errorMessage);
      } else {
        toast.error(`Unexpected error: ${error.message}`);
        console.error("Unexpected error:", error);
      }
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useResidentialAddress;
