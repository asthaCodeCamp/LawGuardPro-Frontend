import * as React from "react";
import axios from "axios";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import {
  Autocomplete,
  Box,
  Button,
  FilledTextFieldProps,
  FormControl,
  FormLabel,
  IconButton,
  OutlinedInput,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextField,
  TextFieldVariants,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { InquiryType } from "@/utilites/InquiryType";
import { useSession } from "next-auth/react";

const Backdrop = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled("div")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow: hidden;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"};
    padding: 24px;
    color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `
);

interface AddCaseModalProps {
  open: boolean;
  handleClose: () => void;
  handleOpenSuccessModal: () => void
}

const AddCaseModal: React.FC<AddCaseModalProps> = ({ open, handleClose,handleOpenSuccessModal }) => {
  const [inquiryName, setInquiryName] = React.useState("");
  const [inquiryType, setInquiryType] = React.useState<any>(null);
  const [description, setDescription] = React.useState("");
  // const [attachment, setAttachment] = React.useState<any | null>(null);

  const { data: session } = useSession();

  console.log("modal session ==== ", session);

  const [error, setError] = React.useState<string | null>(null);
  const options = [
    "Corporate",
    "Criminal",
    "Family",
    "Personal Injury",
    "Estate Planning",
    "Immigration",
    "Intellectual Property",
    "Employment",
    "Bankruptcy",
    "Tax",
    "Environmental",
    "Real Estate",
    "Civil Rights",
    "Entertainment",
    "Health Care",
    "International",
    "Contract",
    "Maritime",
    "Securities",
    "Education",
  ];
  const handleInquiryNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log("Inquiry type === ", event.target.value);
    setInquiryName(event.target.value);
  };

  const handleInquiryTypeChange = (
    event: React.ChangeEvent<{}>,
    newValue: string | null
  ) => {
    setInquiryType(newValue);
    console.log("Inquiry type === ", newValue);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  // const handleAttachmentChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   if (event.target.files) {
  //     setAttachment(event.target.files[0]);
  //   }
  // };

  // const handleSubmit = async () => {
  //   const requestData = {
  //     caseName: inquiryName,
  //     caseType: inquiryType,
  //     description: description,
  //     attachment: "string"

  //   };
  //   console.log(requestData);

  //   try {
  //     const response = await axios.post(
  //       "http://54.203.205.46:5140/api/case",
  //       requestData,
  //       {
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //       }
  //     );
  //     handleClose();
  //     console.log("Response from server:", response.data);
  //   } catch (error) {
  //     console.error("Error submitting form", error);
  //     setError("Failed to submit the form. Please try again later.");
  //   }
  // };
  // const handleSubmit = async () => {
  //   const requestData = {
  //     caseName: inquiryName,
  //     caseType: inquiryType,
  //     description: description,
  //     attachment: "string"
  //   };
  //   console.log(requestData);
  //   try {
  //     const response = await fetch("http://54.203.205.46:5140/api/case", {
  //       method: 'POST',
  //       headers: {
  //         Authorization: `Bearer ${session?.accessToken}`,
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(requestData)
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const responseData = await response.json();
  //     handleClose();
  //     console.log("Response from server:", responseData);
  //   } catch (error) {
  //     console.error("Error submitting form", error);
  //     setError("Failed to submit the form. Please try again later.");
  //   }
  // };

  const handleSubmit = async () => {
    const requestData = {
      caseName: inquiryName,
      caseType: inquiryType,
      description: description,
      attachment: "string",
    };
    console.log(requestData);

    try {
      const response = await axios.post(
        "http://54.203.205.46:5140/api/case",
        requestData,
        {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      handleClose();
      handleOpenSuccessModal();
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error submitting form", error);
      setError("Failed to submit the form. Please try again later.");
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent className="w-[90%] md:w-[56%] lg:w-[35%] h-auto">
          <Box className="w-full">
            <Box className="flex justify-between">
              <span className="font-[600] text-[22px]">Add New Case</span>
              <button onClick={handleClose}>
                <CloseOutlinedIcon />
              </button>
            </Box>
            {error && <p className="text-red-500">{error}</p>}{" "}
            {/* Display error message if error state is set */}
            <Box className="w-full bg-[#EEF2FF] flex items-center my-2">
              <Box className="ml-4 mr-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 17H13V11H11V17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 9H13V7H11V9Z"
                    fill="#1E40AF"
                  />
                  <path
                    d="M11 7H13V9H11V7ZM11 11H13V17H11V11Z"
                    fill="#1E40AF"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                    fill="#1E40AF"
                  />
                </svg>
              </Box>
              <Box className="w-[88%] h-auto font-[500] text-[16px] text-[#1E40AF] py-4">
                You are creating a case for Tomal Ahmed. Please describe your
                inquiry below.
              </Box>
            </Box>
            <Box className="w-full mt-3">
              <FormControl
                sx={{
                  width: "100%",
                  height: "92px",
                  marginBottom: "12px",
                }}
              >
                <label
                  htmlFor="inquiry-name"
                  className="block text-[16px] text-[#191919] font-semibold mb-2 h-6"
                >
                  Inquiry name
                </label>

                <OutlinedInput
                  type="text"
                  id="inquiry-name"
                  placeholder="Enter your inquiry name"
                  className="rounded-lg w-full h-16"
                  value={inquiryName}
                  onChange={handleInquiryNameChange}
                />
              </FormControl>

              <FormControl
                sx={{
                  width: "100%",
                  height: "82px",
                  marginBottom: "12px",
                  marginRight: "16px",
                }}
              >
                <label
                  htmlFor="inquiry-type"
                  className="block text-[16px] text-[#191919] font-semibold mb-2 h-6"
                >
                  Type of inquiry
                </label>
                <Autocomplete
                  options={options}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Select inquiry type"
                      value={inquiryType}
                    />
                  )}
                  onChange={handleInquiryTypeChange}
                />
              </FormControl>

              <Box position="relative">
                <FormLabel
                  htmlFor="description"
                  className="text-[16px] font-semibold text-[#191919] mb-5"
                >
                  Describe
                </FormLabel>
                <TextField
                  id="description"
                  placeholder="Please briefly describe what you'd like to discuss with our lawyers."
                  multiline
                  rows={4}
                  value={description}
                  onChange={handleDescriptionChange}
                  variant="outlined"
                  className="w-full "
                />
                <input
                  accept="*/*"
                  style={{ display: "none", height: "300px" }}
                  id="attachment-button-file"
                  type="file"
                  // onChange={handleAttachmentChange}
                />
                <label htmlFor="attachment-button-file" className="mb-3">
                  <IconButton
                    component="span"
                    className="absolute bottom-0 left-0 mb-2 ml-2"
                  >
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0802 10.4192L9.90016 16.6092C9.08998 17.3293 8.03531 17.7125 6.95188 17.6806C5.86846 17.6487 4.83816 17.2041 4.07173 16.4377C3.30531 15.6712 2.86067 14.6409 2.82878 13.5575C2.79688 12.4741 3.18014 11.4194 3.90016 10.6092L11.9002 2.60924C12.3778 2.15553 13.0114 1.90257 13.6702 1.90257C14.3289 1.90257 14.9625 2.15553 15.4402 2.60924C15.9055 3.08083 16.1664 3.71671 16.1664 4.37924C16.1664 5.04177 15.9055 5.67765 15.4402 6.14924L8.54016 13.0392C8.47187 13.1128 8.38977 13.1721 8.29854 13.214C8.2073 13.2558 8.10873 13.2792 8.00844 13.2829C7.90816 13.2866 7.80812 13.2705 7.71405 13.2356C7.61997 13.2007 7.5337 13.1475 7.46016 13.0792C7.38662 13.0109 7.32725 12.9288 7.28544 12.8376C7.24363 12.7464 7.2202 12.6478 7.21648 12.5475C7.21277 12.4472 7.22885 12.3472 7.26379 12.2531C7.29874 12.159 7.35187 12.0728 7.42016 11.9992L12.5502 6.87924C12.7385 6.69093 12.8443 6.43554 12.8443 6.16924C12.8443 5.90293 12.7385 5.64754 12.5502 5.45924C12.3619 5.27093 12.1065 5.16514 11.8402 5.16514C11.5739 5.16514 11.3185 5.27093 11.1302 5.45924L6.00016 10.5992C5.74346 10.8539 5.53973 11.1569 5.40069 11.4908C5.26166 11.8246 5.19008 12.1826 5.19008 12.5442C5.19008 12.9059 5.26166 13.2639 5.40069 13.5977C5.53973 13.9315 5.74346 14.2345 6.00016 14.4892C6.52453 14.9887 7.22097 15.2673 7.94516 15.2673C8.66935 15.2673 9.36579 14.9887 9.89016 14.4892L16.7802 7.58924C17.575 6.73619 18.0078 5.60791 17.9872 4.4421C17.9666 3.27629 17.4944 2.16398 16.6699 1.3395C15.8454 0.515027 14.7331 0.0427548 13.5673 0.0221855C12.4015 0.00161616 11.2732 0.434355 10.4202 1.22924L2.42016 9.22923C1.34136 10.4241 0.765188 11.9891 0.811693 13.5982C0.858198 15.2073 1.52379 16.7365 2.6698 17.867C3.8158 18.9975 5.35384 19.6423 6.96344 19.6669C8.57305 19.6916 10.1301 19.0942 11.3102 17.9992L17.5002 11.8192C17.5934 11.726 17.6674 11.6153 17.7178 11.4935C17.7683 11.3717 17.7943 11.2411 17.7943 11.1092C17.7943 10.9774 17.7683 10.8468 17.7178 10.725C17.6674 10.6032 17.5934 10.4925 17.5002 10.3992C17.4069 10.306 17.2962 10.232 17.1744 10.1816C17.0526 10.1311 16.922 10.1051 16.7902 10.1051C16.6583 10.1051 16.5277 10.1311 16.4059 10.1816C16.2841 10.232 16.1734 10.306 16.0802 10.3992V10.4192Z"
                        fill="#191919"
                      />
                    </svg>
                    <h3 className="ml-2 text-[14px] font-semibold">
                      Attach Documents
                    </h3>
                  </IconButton>
                </label>
                {/* {attachment && (
                  <span className="absolute bottom-0 left-16 mb-2">
                    {attachment.name}
                  </span>
                )} */}
              </Box>
            </Box>
            <Button
              onClick={handleSubmit}
              type="submit"
              className="self-start text-white rounded-lg bg-LawGuardPrimary px-12 py-3 mt-3  w-full text-[16px] font-semibold capitalize hover:bg-LawGuardPrimary"
            >
              Submit
            </Button>
          </Box>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddCaseModal;
