import * as React from "react";
import AddCaseDashboard from "./AddCaseDashboard";
import { useSession } from "next-auth/react";

interface EmptyCaseProps {}

const EmptyCase: React.FC<EmptyCaseProps> = ({}) => {
  const session = useSession();
  const [caseData, setCasesData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const perPage = 5;
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://lawguardpro-api.saams.xyz/api/case/list?pageNumber=${page}&pageSize=${perPage}`,
          {
            headers: {
              Authorization: `Bearer ${session?.data?.accessToken}`,
            },
          }
        );
        const result = await response.json();
        setCasesData(result.data);
      } catch (error) {
      } finally {
      }
    };
    fetchData();
  }, [page, session]);

  return (
    <div>
      <div className="ml-8">
        <p className="text-[24px] font-[600] mt-[8px]">Case Updates</p>
        <p className="text-[16px] font-[400]">Check your case updates list.</p>
      </div>
      <div className="justify-center items-center text-center mt-[120px] flex flex-col">
        <div>
          <svg
            width="104"
            height="104"
            viewBox="0 0 104 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M85.8867 26C87.1452 26.0005 88.3885 26.275 89.5301 26.8046C90.6718 27.3341 91.6844 28.1059 92.4976 29.0663C93.3108 30.0268 93.9051 31.1528 94.2392 32.3661C94.5732 33.5795 94.639 34.851 94.432 36.0923L87.2127 79.4257C86.8752 81.4493 85.8308 83.2876 84.2653 84.6135C82.6997 85.9394 80.7146 86.6669 78.663 86.6667H25.337C23.2855 86.6669 21.3003 85.9394 19.7348 84.6135C18.1692 83.2876 17.1248 81.4493 16.7874 79.4257L9.56802 36.0923C9.361 34.851 9.4268 33.5795 9.76086 32.3661C10.0949 31.1528 10.6892 30.0268 11.5024 29.0663C12.3157 28.1059 13.3283 27.3341 14.4699 26.8046C15.6116 26.275 16.8549 26.0005 18.1133 26H85.8867Z"
              fill="#E1ABFF"
            />
            <path
              d="M78 13C79.1493 13 80.2515 13.4565 81.0642 14.2692C81.8768 15.0819 82.3334 16.1841 82.3334 17.3333C82.3334 18.4826 81.8768 19.5848 81.0642 20.3975C80.2515 21.2101 79.1493 21.6667 78 21.6667H26C24.8507 21.6667 23.7485 21.2101 22.9359 20.3975C22.1232 19.5848 21.6667 18.4826 21.6667 17.3333C21.6667 16.1841 22.1232 15.0819 22.9359 14.2692C23.7485 13.4565 24.8507 13 26 13H78Z"
              fill="#BD41FF"
            />
          </svg>
        </div>
        <p className="text-[18px] font-[500] mt-[16px] mb-[24px]">
          You currently don’t have any case updates.
        </p>
        <div>
          <AddCaseDashboard casesData={caseData} />
        </div>
      </div>
    </div>
  );
};

export default EmptyCase;
