import React from "react";
import { PaymentRecord } from "./AllQuotes";

interface SingleQuoteProps {
  quote: PaymentRecord;
}

const SingleQuote: React.FC<SingleQuoteProps> = ({ quote }) => {
  const { quoteNumber, value, totalValue, createdOn, status, paymentMethod } =
    quote;
  let createdDate = createdOn?.slice(0, 10);

  return (
    <div className="w-full border-b p-6">
      <div className="mb-6">
        <h1 className="text-lg font-semibold text-[#6D6D6D]">{quoteNumber}</h1>
      </div>
      <div className="flex justify-between">
        <div className="border rounded-l-md w-full pl-6 py-4">
          <h1 className="text-[14px] font-semibold text-[#6D6D6D] mb-2">
            VALUE ( EX VAT )
          </h1>
          <h1 className="text-lg font-semibold text-[#191919]">{value}</h1>
        </div>
        <div className="border w-full pl-6 py-4 ">
          <h1 className="text-[14px] font-semibold text-[#6D6D6D] mb-2">
            TOTAL VALUE
          </h1>
          <h1 className="text-lg font-semibold text-[#191919]">{totalValue}</h1>
        </div>
        <div className="border w-full pl-6 py-4">
          <h1 className="text-[14px] font-semibold text-[#6D6D6D] mb-2">
            DATE CREATED
          </h1>
          <h1 className="text-lg font-semibold text-[#191919]">
            {createdDate}
          </h1>
        </div>
        <div className="border w-full pl-6 py-4">
          <h1 className="text-[14px] font-semibold text-[#6D6D6D] mb-2">
            STATUS
          </h1>
          <h1 className="text-lg font-semibold text-[#191919]">{status}</h1>
        </div>
        <div className="border w-full rounded-r-md pl-6 py-4">
          <h1 className="text-[14px] font-semibold text-[#6D6D6D] mb-2">
            PAYMENT METHOD
          </h1>
          <h1 className="text-lg font-semibold text-[#191919]">
            {paymentMethod}
          </h1>
        </div>
      </div>
      <div className="flex justify-end gap-6 mt-8">
        <div className="flex justify-center items-center gap-2">
          <svg
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.4196 7.6C18.3996 2.91 14.5996 0 10.4996 0C6.39958 0 2.59958 2.91 0.579579 7.6C0.524515 7.72617 0.496094 7.86234 0.496094 8C0.496094 8.13766 0.524515 8.27383 0.579579 8.4C2.59958 13.09 6.39958 16 10.4996 16C14.5996 16 18.3996 13.09 20.4196 8.4C20.4746 8.27383 20.5031 8.13766 20.5031 8C20.5031 7.86234 20.4746 7.72617 20.4196 7.6ZM10.4996 14C7.32958 14 4.32958 11.71 2.59958 8C4.32958 4.29 7.32958 2 10.4996 2C13.6696 2 16.6696 4.29 18.3996 8C16.6696 11.71 13.6696 14 10.4996 14ZM10.4996 4C9.70845 4 8.93509 4.2346 8.2773 4.67412C7.6195 5.11365 7.10681 5.73836 6.80406 6.46927C6.50131 7.20017 6.4221 8.00444 6.57644 8.78036C6.73078 9.55628 7.11174 10.269 7.67115 10.8284C8.23056 11.3878 8.94329 11.7688 9.71922 11.9231C10.4951 12.0775 11.2994 11.9983 12.0303 11.6955C12.7612 11.3928 13.3859 10.8801 13.8255 10.2223C14.265 9.56448 14.4996 8.79113 14.4996 8C14.4996 6.93913 14.0782 5.92172 13.328 5.17157C12.5779 4.42143 11.5604 4 10.4996 4ZM10.4996 10C10.104 10 9.71734 9.8827 9.38844 9.66294C9.05954 9.44318 8.80319 9.13082 8.65182 8.76537C8.50044 8.39991 8.46084 7.99778 8.53801 7.60982C8.61518 7.22186 8.80566 6.86549 9.08537 6.58579C9.36507 6.30608 9.72144 6.1156 10.1094 6.03843C10.4974 5.96126 10.8995 6.00087 11.2649 6.15224C11.6304 6.30362 11.9428 6.55996 12.1625 6.88886C12.3823 7.21776 12.4996 7.60444 12.4996 8C12.4996 8.53043 12.2889 9.03914 11.9138 9.41421C11.5387 9.78929 11.03 10 10.4996 10Z"
              fill="#191919"
            />
          </svg>
          <h1>View Invoice</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12C18.7348 12 18.4804 12.1054 18.2929 12.2929C18.1054 12.4804 18 12.7348 18 13V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V13C2 12.7348 1.89464 12.4804 1.70711 12.2929C1.51957 12.1054 1.26522 12 1 12C0.734784 12 0.48043 12.1054 0.292893 12.2929C0.105357 12.4804 0 12.7348 0 13V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V13C20 12.7348 19.8946 12.4804 19.7071 12.2929C19.5196 12.1054 19.2652 12 19 12ZM9.29 13.71C9.3851 13.801 9.49725 13.8724 9.62 13.92C9.7397 13.9729 9.86913 14.0002 10 14.0002C10.1309 14.0002 10.2603 13.9729 10.38 13.92C10.5028 13.8724 10.6149 13.801 10.71 13.71L14.71 9.71C14.8983 9.5217 15.0041 9.2663 15.0041 9C15.0041 8.7337 14.8983 8.4783 14.71 8.29C14.5217 8.1017 14.2663 7.99591 14 7.99591C13.7337 7.99591 13.4783 8.1017 13.29 8.29L11 10.59V1C11 0.734784 10.8946 0.48043 10.7071 0.292893C10.5196 0.105357 10.2652 0 10 0C9.73478 0 9.48043 0.105357 9.29289 0.292893C9.10536 0.48043 9 0.734784 9 1V10.59L6.71 8.29C6.61676 8.19676 6.50607 8.1228 6.38425 8.07234C6.26243 8.02188 6.13186 7.99591 6 7.99591C5.86814 7.99591 5.73757 8.02188 5.61575 8.07234C5.49393 8.1228 5.38324 8.19676 5.29 8.29C5.19676 8.38324 5.1228 8.49393 5.07234 8.61575C5.02188 8.73757 4.99591 8.86814 4.99591 9C4.99591 9.13186 5.02188 9.26243 5.07234 9.38425C5.1228 9.50607 5.19676 9.61676 5.29 9.71L9.29 13.71Z"
              fill="#191919"
            />
          </svg>
          <h1>Download Terms</h1>
        </div>
      </div>
    </div>
  );
};

export default SingleQuote;
