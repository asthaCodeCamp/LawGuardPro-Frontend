import { useState, ChangeEvent, FormEvent } from "react";
import { TextField, MenuItem, Button, IconButton, Box } from "@mui/material";

const SupportFrom = () => {
  const [topic, setTopic] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [attachment, setAttachment] = useState<File | null>(null);

  const handleTopicChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTopic(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleAttachmentChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setAttachment(event.target.files[0]);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-3">
      <label htmlFor="topic" className=" text-[16px] font-semibold">
        Topic
      </label>
      <TextField
        id="topic"
        select
        value={topic}
        onChange={handleTopicChange}
        variant="outlined"
        className="w-full"
      >
        <MenuItem value="" disabled>
          Select topic
        </MenuItem>
        <MenuItem value="topic1">Topic 1</MenuItem>
        <MenuItem value="topic2">Topic 2</MenuItem>
        <MenuItem value="topic3">Topic 3</MenuItem>
      </TextField>
      <Box position="relative">
        <label htmlFor="description" className=" text-[16px] font-semibold ">
          Describe
        </label>
        <TextField
          id="description"
          placeholder="Describe your topic"
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
          onChange={handleAttachmentChange}
        />
        <label htmlFor="attachment-button-file">
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
            <h3 className="ml-2 text-[14px] font-semibold">Attach Documents</h3>
          </IconButton>
        </label>
        {attachment && (
          <span className="absolute bottom-0 left-16 mb-2">
            {attachment.name}
          </span>
        )}
      </Box>
      <Button
        type="submit"
        className="self-start text-white rounded-lg bg-LawGuardPrimary px-12 py-4 text-[16px] font-semibold hover:bg-LawGuardPrimary"
      >
        Submit
      </Button>
    </form>
  );
};

export default SupportFrom;
