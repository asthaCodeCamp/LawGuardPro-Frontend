import { Box } from "@mui/material";
import Image from "next/image";

const UnreadNotification = () => {
  return (
    <>
      <Box
        sx={{ width: "100%", height: "100px" }}
        className="flex justify-center items-center border border-t-0 border-r-0 border-l-0 border-b-1"
      >
        <Box
          sx={{
            width: "100%",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="ml-8 mr-[60px]"
        >
          <Box className="flex">
            <Box className="w-14 h-14 mr-4">
              <Image
                src="/assets/notificationImage/icon-1.jpeg"
                alt="avatar1"
                width={56}
                height={56}
                className="h-14"
                style={{ borderRadius: "8px" }}
              />
            </Box>
            <Box className="w-[920px] h-14 flex flex-col">
              <span className="font-[400] text-[16px] leading-6 mb-2">
                You've been mentioned by{" "}
                <span className="font-[600]">Saifuddin Ahmed</span> in a message
                pertaining to{" "}
                <span className="font-[600]">Case File 012546</span>
              </span>
              <span className="flex items-center font-[400] text-[16px] leading-6 mb-2">
                5 mins ago
                <span className="ml-2">
                  <svg
                    width="16.67"
                    height="16.67"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.16665 0.666016C7.51847 0.666016 5.90731 1.15476 4.5369 2.07044C3.16649 2.98611 2.09838 4.2876 1.46765 5.81032C0.836924 7.33304 0.671896 9.00859 0.993439 10.6251C1.31498 12.2416 2.10866 13.7265 3.27409 14.8919C4.43953 16.0573 5.92439 16.851 7.5409 17.1726C9.15741 17.4941 10.833 17.3291 12.3557 16.6983C13.8784 16.0676 15.1799 14.9995 16.0956 13.6291C17.0112 12.2587 17.5 10.6475 17.5 8.99935C17.5 7.905 17.2844 6.82137 16.8656 5.81032C16.4469 4.79927 15.833 3.88061 15.0592 3.10679C14.2854 2.33297 13.3667 1.71914 12.3557 1.30035C11.3446 0.881564 10.261 0.666016 9.16665 0.666016ZM9.16665 15.666C7.84811 15.666 6.55918 15.275 5.46285 14.5425C4.36652 13.8099 3.51204 12.7687 3.00745 11.5506C2.50287 10.3324 2.37085 8.99195 2.62808 7.69875C2.88532 6.40554 3.52025 5.21765 4.4526 4.2853C5.38495 3.35295 6.57284 2.71802 7.86605 2.46078C9.15926 2.20355 10.4997 2.33557 11.7179 2.84015C12.936 3.34474 13.9772 4.19922 14.7098 5.29555C15.4423 6.39188 15.8333 7.68081 15.8333 8.99935C15.8333 10.7675 15.1309 12.4632 13.8807 13.7134C12.6305 14.9636 10.9348 15.666 9.16665 15.666ZM9.16665 3.99935C8.94564 3.99935 8.73368 4.08715 8.57739 4.24343C8.42111 4.39971 8.33332 4.61167 8.33332 4.83268V8.16602H6.66665C6.44564 8.16602 6.23367 8.25381 6.07739 8.41009C5.92111 8.56637 5.83332 8.77834 5.83332 8.99935C5.83332 9.22036 5.92111 9.43232 6.07739 9.5886C6.23367 9.74489 6.44564 9.83268 6.66665 9.83268H9.16665C9.38766 9.83268 9.59963 9.74489 9.75591 9.5886C9.91219 9.43232 9.99998 9.22036 9.99998 8.99935V4.83268C9.99998 4.61167 9.91219 4.39971 9.75591 4.24343C9.59963 4.08715 9.38766 3.99935 9.16665 3.99935Z"
                      fill="#191919"
                    />
                  </svg>
                </span>
              </span>
            </Box>
          </Box>

          <Box className="flex justify items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.54 11.2895L9.87998 5.63955C9.78702 5.54582 9.67642 5.47143 9.55456 5.42066C9.4327 5.36989 9.30199 5.34375 9.16998 5.34375C9.03797 5.34375 8.90726 5.36989 8.78541 5.42066C8.66355 5.47143 8.55294 5.54582 8.45998 5.63955C8.27373 5.82691 8.16919 6.08036 8.16919 6.34455C8.16919 6.60873 8.27373 6.86219 8.45998 7.04955L13.41 12.0495L8.45998 16.9995C8.27373 17.1869 8.16919 17.4404 8.16919 17.7045C8.16919 17.9687 8.27373 18.2222 8.45998 18.4095C8.5526 18.504 8.66304 18.5792 8.78492 18.6307C8.90679 18.6822 9.03767 18.709 9.16998 18.7095C9.30229 18.709 9.43317 18.6822 9.55505 18.6307C9.67692 18.5792 9.78737 18.504 9.87998 18.4095L15.54 12.7595C15.6415 12.6659 15.7225 12.5523 15.7779 12.4258C15.8333 12.2993 15.8619 12.1627 15.8619 12.0245C15.8619 11.8864 15.8333 11.7498 15.7779 11.6233C15.7225 11.4968 15.6415 11.3832 15.54 11.2895Z"
                fill="#888888"
              />
            </svg>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ width: "100%", height: "100px" }}
        className="flex justify-center items-center border-b"
      >
        <Box
          sx={{
            width: "100%",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="ml-8 mr-[60px]"
        >
          <Box className="flex">
            <Box className="w-14 h-14 mr-4">
              <Image
                src="/assets/notificationImage/icon-1.jpeg"
                alt="avatar2"
                width={56}
                height={56}
                className="h-14"
                style={{ borderRadius: "8px" }}
              />
            </Box>
            <Box className="w-[920px] h-14 flex flex-col">
              <span className="font-[400] text-[16px] leading-6 mb-2">
                You've been mentioned by{" "}
                <span className="font-[600]">Saifuddin Ahmed</span> in a message
                pertaining to{" "}
                <span className="font-[600]">Case File 012546</span>
              </span>
              <span className="flex items-center font-[400] text-[16px] leading-6 mb-2">
                Today at 9:00 a.m
                <span className="ml-2">
                  <svg
                    width="16.67"
                    height="16.67"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.16665 0.666016C7.51847 0.666016 5.90731 1.15476 4.5369 2.07044C3.16649 2.98611 2.09838 4.2876 1.46765 5.81032C0.836924 7.33304 0.671896 9.00859 0.993439 10.6251C1.31498 12.2416 2.10866 13.7265 3.27409 14.8919C4.43953 16.0573 5.92439 16.851 7.5409 17.1726C9.15741 17.4941 10.833 17.3291 12.3557 16.6983C13.8784 16.0676 15.1799 14.9995 16.0956 13.6291C17.0112 12.2587 17.5 10.6475 17.5 8.99935C17.5 7.905 17.2844 6.82137 16.8656 5.81032C16.4469 4.79927 15.833 3.88061 15.0592 3.10679C14.2854 2.33297 13.3667 1.71914 12.3557 1.30035C11.3446 0.881564 10.261 0.666016 9.16665 0.666016ZM9.16665 15.666C7.84811 15.666 6.55918 15.275 5.46285 14.5425C4.36652 13.8099 3.51204 12.7687 3.00745 11.5506C2.50287 10.3324 2.37085 8.99195 2.62808 7.69875C2.88532 6.40554 3.52025 5.21765 4.4526 4.2853C5.38495 3.35295 6.57284 2.71802 7.86605 2.46078C9.15926 2.20355 10.4997 2.33557 11.7179 2.84015C12.936 3.34474 13.9772 4.19922 14.7098 5.29555C15.4423 6.39188 15.8333 7.68081 15.8333 8.99935C15.8333 10.7675 15.1309 12.4632 13.8807 13.7134C12.6305 14.9636 10.9348 15.666 9.16665 15.666ZM9.16665 3.99935C8.94564 3.99935 8.73368 4.08715 8.57739 4.24343C8.42111 4.39971 8.33332 4.61167 8.33332 4.83268V8.16602H6.66665C6.44564 8.16602 6.23367 8.25381 6.07739 8.41009C5.92111 8.56637 5.83332 8.77834 5.83332 8.99935C5.83332 9.22036 5.92111 9.43232 6.07739 9.5886C6.23367 9.74489 6.44564 9.83268 6.66665 9.83268H9.16665C9.38766 9.83268 9.59963 9.74489 9.75591 9.5886C9.91219 9.43232 9.99998 9.22036 9.99998 8.99935V4.83268C9.99998 4.61167 9.91219 4.39971 9.75591 4.24343C9.59963 4.08715 9.38766 3.99935 9.16665 3.99935Z"
                      fill="#191919"
                    />
                  </svg>
                </span>
              </span>
            </Box>
          </Box>

          <Box className="flex justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <path
                d="M15.54 11.2895L9.87998 5.63955C9.78702 5.54582 9.67642 5.47143 9.55456 5.42066C9.4327 5.36989 9.30199 5.34375 9.16998 5.34375C9.03797 5.34375 8.90726 5.36989 8.78541 5.42066C8.66355 5.47143 8.55294 5.54582 8.45998 5.63955C8.27373 5.82691 8.16919 6.08036 8.16919 6.34455C8.16919 6.60873 8.27373 6.86219 8.45998 7.04955L13.41 12.0495L8.45998 16.9995C8.27373 17.1869 8.16919 17.4404 8.16919 17.7045C8.16919 17.9687 8.27373 18.2222 8.45998 18.4095C8.5526 18.504 8.66304 18.5792 8.78492 18.6307C8.90679 18.6822 9.03767 18.709 9.16998 18.7095C9.30229 18.709 9.43317 18.6822 9.55505 18.6307C9.67692 18.5792 9.78737 18.504 9.87998 18.4095L15.54 12.7595C15.6415 12.6659 15.7225 12.5523 15.7779 12.4258C15.8333 12.2993 15.8619 12.1627 15.8619 12.0245C15.8619 11.8864 15.8333 11.7498 15.7779 11.6233C15.7225 11.4968 15.6415 11.3832 15.54 11.2895Z"
                fill="#888888"
              />
            </svg>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ width: "100%", height: "100px" }}
        className="flex justify-center items-center border-b"
      >
        <Box
          sx={{
            width: "100%",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="ml-8 mr-[60px]"
        >
          <Box className="flex">
            <Box className="w-14 h-14 mr-4">
              <Image
                src="/assets/notificationImage/icon-2.jpg"
                alt="avatar3"
                width={56}
                height={56}
                className="h-14"
                style={{ borderRadius: "8px" }}
              />
            </Box>
            <Box className="w-[920px] h-14 flex flex-col">
              <span className="font-[400] text-[16px] leading-6 mb-2">
                <span className="font-[600]">Important Update: </span>
                New Features Now Available!
              </span>
              <span className="flex items-center font-[400] text-[16px] leading-6 mb-2">
                Yesterday at 9:00 a.m
                <span className="ml-2">
                  <svg
                    width="16.67"
                    height="16.67"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.16665 0.666016C7.51847 0.666016 5.90731 1.15476 4.5369 2.07044C3.16649 2.98611 2.09838 4.2876 1.46765 5.81032C0.836924 7.33304 0.671896 9.00859 0.993439 10.6251C1.31498 12.2416 2.10866 13.7265 3.27409 14.8919C4.43953 16.0573 5.92439 16.851 7.5409 17.1726C9.15741 17.4941 10.833 17.3291 12.3557 16.6983C13.8784 16.0676 15.1799 14.9995 16.0956 13.6291C17.0112 12.2587 17.5 10.6475 17.5 8.99935C17.5 7.905 17.2844 6.82137 16.8656 5.81032C16.4469 4.79927 15.833 3.88061 15.0592 3.10679C14.2854 2.33297 13.3667 1.71914 12.3557 1.30035C11.3446 0.881564 10.261 0.666016 9.16665 0.666016ZM9.16665 15.666C7.84811 15.666 6.55918 15.275 5.46285 14.5425C4.36652 13.8099 3.51204 12.7687 3.00745 11.5506C2.50287 10.3324 2.37085 8.99195 2.62808 7.69875C2.88532 6.40554 3.52025 5.21765 4.4526 4.2853C5.38495 3.35295 6.57284 2.71802 7.86605 2.46078C9.15926 2.20355 10.4997 2.33557 11.7179 2.84015C12.936 3.34474 13.9772 4.19922 14.7098 5.29555C15.4423 6.39188 15.8333 7.68081 15.8333 8.99935C15.8333 10.7675 15.1309 12.4632 13.8807 13.7134C12.6305 14.9636 10.9348 15.666 9.16665 15.666ZM9.16665 3.99935C8.94564 3.99935 8.73368 4.08715 8.57739 4.24343C8.42111 4.39971 8.33332 4.61167 8.33332 4.83268V8.16602H6.66665C6.44564 8.16602 6.23367 8.25381 6.07739 8.41009C5.92111 8.56637 5.83332 8.77834 5.83332 8.99935C5.83332 9.22036 5.92111 9.43232 6.07739 9.5886C6.23367 9.74489 6.44564 9.83268 6.66665 9.83268H9.16665C9.38766 9.83268 9.59963 9.74489 9.75591 9.5886C9.91219 9.43232 9.99998 9.22036 9.99998 8.99935V4.83268C9.99998 4.61167 9.91219 4.39971 9.75591 4.24343C9.59963 4.08715 9.38766 3.99935 9.16665 3.99935Z"
                      fill="#191919"
                    />
                  </svg>
                </span>
              </span>
            </Box>
          </Box>
          <Box className="flex justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <path
                d="M15.54 11.2895L9.87998 5.63955C9.78702 5.54582 9.67642 5.47143 9.55456 5.42066C9.4327 5.36989 9.30199 5.34375 9.16998 5.34375C9.03797 5.34375 8.90726 5.36989 8.78541 5.42066C8.66355 5.47143 8.55294 5.54582 8.45998 5.63955C8.27373 5.82691 8.16919 6.08036 8.16919 6.34455C8.16919 6.60873 8.27373 6.86219 8.45998 7.04955L13.41 12.0495L8.45998 16.9995C8.27373 17.1869 8.16919 17.4404 8.16919 17.7045C8.16919 17.9687 8.27373 18.2222 8.45998 18.4095C8.5526 18.504 8.66304 18.5792 8.78492 18.6307C8.90679 18.6822 9.03767 18.709 9.16998 18.7095C9.30229 18.709 9.43317 18.6822 9.55505 18.6307C9.67692 18.5792 9.78737 18.504 9.87998 18.4095L15.54 12.7595C15.6415 12.6659 15.7225 12.5523 15.7779 12.4258C15.8333 12.2993 15.8619 12.1627 15.8619 12.0245C15.8619 11.8864 15.8333 11.7498 15.7779 11.6233C15.7225 11.4968 15.6415 11.3832 15.54 11.2895Z"
                fill="#888888"
              />
            </svg>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ width: "100%", height: "100px" }}
        className="flex justify-center items-center border-b"
      >
        <Box
          sx={{
            width: "100%",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="ml-8 mr-[60px]"
        >
          <Box className="flex">
            <Box className="w-14 h-14 mr-4">
              <Image
                src="/assets/notificationImage/icon-3.jpg"
                alt="avatar4"
                width={56}
                height={56}
                className="h-14"
                style={{ borderRadius: "8px" }}
              />
            </Box>
            <Box className="w-[920px] h-14 flex flex-col">
              <span className="font-[400] text-[16px] leading-6 mb-2">
                Check your lawyer quote
              </span>
              <span className="flex items-center font-[400] text-[16px] leading-6 mb-2">
                10 OCT 2023 at 8:50 a.m
                <span className="ml-2">
                  <svg
                    width="16.67"
                    height="16.67"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.16665 0.666016C7.51847 0.666016 5.90731 1.15476 4.5369 2.07044C3.16649 2.98611 2.09838 4.2876 1.46765 5.81032C0.836924 7.33304 0.671896 9.00859 0.993439 10.6251C1.31498 12.2416 2.10866 13.7265 3.27409 14.8919C4.43953 16.0573 5.92439 16.851 7.5409 17.1726C9.15741 17.4941 10.833 17.3291 12.3557 16.6983C13.8784 16.0676 15.1799 14.9995 16.0956 13.6291C17.0112 12.2587 17.5 10.6475 17.5 8.99935C17.5 7.905 17.2844 6.82137 16.8656 5.81032C16.4469 4.79927 15.833 3.88061 15.0592 3.10679C14.2854 2.33297 13.3667 1.71914 12.3557 1.30035C11.3446 0.881564 10.261 0.666016 9.16665 0.666016ZM9.16665 15.666C7.84811 15.666 6.55918 15.275 5.46285 14.5425C4.36652 13.8099 3.51204 12.7687 3.00745 11.5506C2.50287 10.3324 2.37085 8.99195 2.62808 7.69875C2.88532 6.40554 3.52025 5.21765 4.4526 4.2853C5.38495 3.35295 6.57284 2.71802 7.86605 2.46078C9.15926 2.20355 10.4997 2.33557 11.7179 2.84015C12.936 3.34474 13.9772 4.19922 14.7098 5.29555C15.4423 6.39188 15.8333 7.68081 15.8333 8.99935C15.8333 10.7675 15.1309 12.4632 13.8807 13.7134C12.6305 14.9636 10.9348 15.666 9.16665 15.666ZM9.16665 3.99935C8.94564 3.99935 8.73368 4.08715 8.57739 4.24343C8.42111 4.39971 8.33332 4.61167 8.33332 4.83268V8.16602H6.66665C6.44564 8.16602 6.23367 8.25381 6.07739 8.41009C5.92111 8.56637 5.83332 8.77834 5.83332 8.99935C5.83332 9.22036 5.92111 9.43232 6.07739 9.5886C6.23367 9.74489 6.44564 9.83268 6.66665 9.83268H9.16665C9.38766 9.83268 9.59963 9.74489 9.75591 9.5886C9.91219 9.43232 9.99998 9.22036 9.99998 8.99935V4.83268C9.99998 4.61167 9.91219 4.39971 9.75591 4.24343C9.59963 4.08715 9.38766 3.99935 9.16665 3.99935Z"
                      fill="#191919"
                    />
                  </svg>
                </span>
              </span>
            </Box>
          </Box>
          <Box className="flex justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <path
                d="M15.54 11.2895L9.87998 5.63955C9.78702 5.54582 9.67642 5.47143 9.55456 5.42066C9.4327 5.36989 9.30199 5.34375 9.16998 5.34375C9.03797 5.34375 8.90726 5.36989 8.78541 5.42066C8.66355 5.47143 8.55294 5.54582 8.45998 5.63955C8.27373 5.82691 8.16919 6.08036 8.16919 6.34455C8.16919 6.60873 8.27373 6.86219 8.45998 7.04955L13.41 12.0495L8.45998 16.9995C8.27373 17.1869 8.16919 17.4404 8.16919 17.7045C8.16919 17.9687 8.27373 18.2222 8.45998 18.4095C8.5526 18.504 8.66304 18.5792 8.78492 18.6307C8.90679 18.6822 9.03767 18.709 9.16998 18.7095C9.30229 18.709 9.43317 18.6822 9.55505 18.6307C9.67692 18.5792 9.78737 18.504 9.87998 18.4095L15.54 12.7595C15.6415 12.6659 15.7225 12.5523 15.7779 12.4258C15.8333 12.2993 15.8619 12.1627 15.8619 12.0245C15.8619 11.8864 15.8333 11.7498 15.7779 11.6233C15.7225 11.4968 15.6415 11.3832 15.54 11.2895Z"
                fill="#888888"
              />
            </svg>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UnreadNotification;
