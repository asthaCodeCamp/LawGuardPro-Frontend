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
import svgs from "@/components/svg/svg";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "@/utilites/enums";

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
  handleOpenSuccessModal: () => void;
}

const AddCaseModal: React.FC<AddCaseModalProps> = ({
  open,
  handleClose,
  handleOpenSuccessModal,
}) => {
  const [inquiryName, setInquiryName] = React.useState("");
  const [inquiryType, setInquiryType] = React.useState<any>(null);
  const [description, setDescription] = React.useState("");

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
  const queryClient = useQueryClient()

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



      handleFileUpload();
    
      handleClose();
      handleOpenSuccessModal();
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error submitting form", error);
      setError("Failed to submit the form. Please try again later.");
    }
  };
  // file upload chunk--------
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleFileUpload = (): void => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const chunkSize = 1 * 1024 * 1024; // 1MB
    const totalChunks = Math.ceil(selectedFile.size / chunkSize);
    let chunkNumber = 0;
    let start = 0;
    let end = chunkSize;

    const uploadNextChunk = async (): Promise<void> => {
      if (start < selectedFile.size) {
        const chunk = selectedFile.slice(start, end);
        const formData = new FormData();
        formData.append("chunk", chunk);
        formData.append("fileName", selectedFile.name);
        formData.append("chunkIndex", chunkNumber.toString());
        formData.append("totalChunks", totalChunks.toString());

        try {
          const response = await fetch(
            "http://54.203.205.46:5140/api/filecontroller/upload-chunk",
            {
              method: "POST",
              body: formData,
            }
          );
          const data = await response.json();
          
          console.log({ data });

          const temp = `Chunk ${
            chunkNumber + 1
          }/${totalChunks} uploaded successfully`;
          console.log(temp);

          chunkNumber++;
          start = end;
          end = start + chunkSize;

          await uploadNextChunk();
        } catch (error) {
          console.error("Error uploading chunk:", error);
        }
      } else {
        setSelectedFile(null);
      }
    };

    uploadNextChunk();
  };
  

  const reval = () =>{
    
    queryClient.invalidateQueries({queryKey: [QueryKeys.cases , 5 , 1] })
  }

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
        <button onClick={()=> reval()}>
        hello
      </button>
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
                  Inquiry name <span className="text-red-700">*</span>
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
                  Type of inquiry <span className="text-red-700">*</span>
                </label>
                <Autocomplete
          
                  options={options}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Select inquiry type"
                      required
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
                  Describe <span className="text-red-700">*</span>
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
                  onChange={handleFileChange}
                  accept="*/*"
                  style={{ display: "none", height: "300px" }}
                
                  id="attachment-button-file"
                  type="file"
                />

                <label htmlFor="attachment-button-file" className="mb-3">
                  <IconButton
                    component="span"
                    className="absolute bottom-0 left-0 mb-2 ml-2"
                  >
                    {svgs?.attechmentIcon}
                    <h3 className="ml-2 text-[14px] font-semibold">
                      Attach Documents
                    </h3>
                  </IconButton>
                </label>
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
