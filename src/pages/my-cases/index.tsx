import CasePagination from "@/components/Case/CasePagination";
import CaseTable from "@/components/Case/CaseTable";
import CaseUpadate from "@/components/Case/CaseUpadate";
import CaseHeader from "@/components/Case/CasesHeader";
import AddCaseMoadal from "@/components/Modals/AddCaseModal";
import CircularIndeterminate from "@/components/Spinner/Spinner";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import { useGetAllCases } from "@/modules/MyCases/MyCases.hooks";
import {
  Button,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import { authOptions } from "../api/auth/[...nextauth]";

const MyCases = () => {
  // const session = useSession();
  const router = useRouter();

  const [page, setPage] = useState(1);
  const { data, isPending } = useGetAllCases({ pageSize: 5, pageNumber: page });

  // const fetchData = async () => {

  //   try {
  //     const response = await fetch(http://54.203.205.46:5140/api/case/list?pageNumber=${page}&pageSize=${parPage}, {
  //       headers: {
  //         Authorization: Bearer ${session?.data?.accessToken},
  //       }
  //     });
  //     const result = await response.json();
  //     console.log("Cases", result);
  //     setCasesData(result.data);
  //     if(result.data){
  //       setTotalCount(result.data.totalCount)
  //     }
  //     // setTotalPages(result.totalPages);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   } finally {
  //     // setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   // fetchData();
  // }, [page, session]);

  // useEffect(()=>{
  //   console.log(data , "at use Effect");
  // },[isPending])

  // console.log("Case HEader",caseData);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/login");
    }
  }, [session]);

  return (
    <>
      <ProtectedLayout>
        {data ? (
          <div className="w-full">
            <CaseHeader casesData={data} />
            <CaseTable casesData={data} />
            <div className="flex  my-[36px] mx-auto  justify-between ">
              <div className="ml-[48px] ">
                {" "}
                <h2>{data.totalCount} Cases found</h2>
              </div>
              <div className=" mr-48">
                <CasePagination
                  casesData={data}
                  pages={page}
                  setPage={setPage}
                ></CasePagination>
              </div>
              <div className=""></div>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <div className="w-full border-b pb-4">
              <div className="px-[32px] mb-4">
                <div className="flex justify-between items-center py-4 px-6">
                  <div>
                    <h1 className="text-2xl font-semibold mb-2">
                      My All Cases
                    </h1>
                    <p>Check your all case list.</p>
                  </div>
                  <div>
                    <Button
                      className="bg-[#6B0F99] hover:bg-[#6B0F99] text-[16px] font-[600] ml-4"
                      variant="contained"
                    >
                      + Add new case
                    </Button>
                  </div>
                </div>
              </div>
              <div className="px-[32px]">
                <div className="flex justify-between items-center px-6 gap-4">
                  <div className="flex justify-between w-full px-6 pt-6 rounded-lg border">
                    <div>
                      <p>Open Cases</p>
                      <Skeleton
                        className="mt-1"
                        variant="rectangular"
                        width={50}
                        height={20}
                      />
                    </div>
                    <div>
                      <svg
                        width="120"
                        height="101"
                        viewBox="0 0 120 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_472_18038)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M64.0723 20.4199V91.455H98.8672C99.2383 91.455 99.5312 91.7578 99.5312 92.1289V99.6484C99.5312 100.019 99.2285 100.322 98.8672 100.322H22.3047C21.9336 100.322 21.6309 100.019 21.6309 99.6484V92.1289C21.6309 91.7578 21.9336 91.455 22.3047 91.455H57.0996V20.4492C54.0723 19.3945 51.6699 17.0019 50.6152 13.9746H28.6133V17.3242C28.6133 17.6953 28.3105 17.9883 27.9492 17.9883H22.3047C21.9336 17.9883 21.6309 17.6855 21.6309 17.3242V13.9746H16.0352C15.6055 13.9746 15.2539 13.6719 15.2539 13.3105V7.65625C15.2539 7.28515 15.6055 6.98242 16.0352 6.98242H50.6348C52.0801 2.91992 55.9668 0 60.5371 0C65.1074 0 68.9941 2.91992 70.4394 6.99218H105.137C105.566 6.99218 105.918 7.29492 105.918 7.66601V13.3105C105.918 13.6816 105.566 13.9746 105.137 13.9746H98.8281V17.3242C98.8281 17.6953 98.5254 17.9883 98.1641 17.9883H92.5195C92.1484 17.9883 91.8457 17.6855 91.8457 17.3242V13.9746H70.4688C69.4238 16.9727 67.0605 19.3457 64.0723 20.4199ZM97.3242 21.7773L119.697 61.3086C119.893 61.6504 119.98 62.0215 119.971 62.3828H119.99C119.99 62.4316 119.99 62.4804 119.99 62.5293C119.99 71.9433 108.906 79.58 95.2344 79.58C81.709 79.58 70.7226 72.1093 70.4883 62.832C70.4492 62.6758 70.4297 62.5 70.4297 62.334C70.4297 61.9043 70.5664 61.4941 70.791 61.1621L93.6719 21.6797C94.248 20.6836 95.5176 20.3418 96.5137 20.918C96.875 21.1426 97.1484 21.4355 97.3242 21.7773ZM97.4121 30.3808V60.2636H114.326L97.4121 30.3808ZM93.4277 60.2539V30.4297L76.1328 60.2539H93.4277ZM26.8945 21.7773L49.2676 61.3086C49.4629 61.6504 49.5508 62.0215 49.541 62.3828H49.5605C49.5605 62.4316 49.5605 62.4804 49.5605 62.5293C49.5605 71.9433 38.4766 79.58 24.8047 79.58C11.2793 79.58 0.292969 72.1093 0.0585937 62.832C0.0195312 62.6855 0 62.5195 0 62.3437C0 61.914 0.136719 61.5039 0.361328 61.1719L23.2422 21.6894C23.8184 20.6934 25.0879 20.3516 26.084 20.9277C26.4453 21.1426 26.7188 21.4355 26.8945 21.7773ZM26.9824 30.3808V60.2636H43.8965L26.9824 30.3808ZM22.9883 60.2539V30.4297L5.70312 60.2539H22.9883ZM60.5371 5.92773C63.0664 5.92773 65.1172 7.97851 65.1172 10.5078C65.1172 13.0371 63.0664 15.0879 60.5371 15.0879C58.0078 15.0879 55.957 13.0371 55.957 10.5078C55.957 7.97851 58.0078 5.92773 60.5371 5.92773Z"
                            fill="#E0E7FF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_472_18038">
                            <rect width="120" height="100.313" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between w-full px-6 pt-6 rounded-lg border">
                    <div>
                      <p>Closed Cases</p>
                      <Skeleton
                        className="mt-1"
                        variant="rectangular"
                        width={50}
                        height={20}
                      />
                    </div>
                    <div>
                      <svg
                        width="120"
                        height="102"
                        viewBox="0 0 120 102"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M70.8691 19.3456C73.1152 21.5917 73.164 25.2147 70.9668 27.412L69.7851 28.5936L79.3066 37.9589L55.2246 61.1717L45.9472 51.5624L9.78512 87.7245C7.59762 89.912 3.96481 89.8729 1.71871 87.6268C-0.527379 85.3807 -0.576208 81.7577 1.62106 79.5604L37.9199 43.2616L30.6543 35.7128L53.4179 12.4901L61.5722 20.4882L62.8222 19.2382C65 17.0507 68.623 17.0995 70.8691 19.3456ZM120 97.5487C120 100.078 117.988 102.148 115.518 102.148L63.75 102.158C61.2793 102.158 59.2675 100.088 59.2675 97.5585C59.2675 95.078 61.2402 92.9589 63.75 92.9589H69.2675C67.8808 92.1776 66.9336 90.6639 66.9336 88.9257C66.9336 86.4452 68.9062 84.326 71.416 84.326H107.842C110.312 84.3163 112.334 86.3866 112.334 88.9159C112.334 90.6542 111.377 92.1776 109.98 92.9589H115.508C117.988 92.9491 120 95.0194 120 97.5487ZM52.4218 1.36706C54.2089 3.15417 54.248 6.0448 52.5 7.78308L25.9375 34.3456C24.1894 36.0936 21.3086 36.0546 19.5214 34.2675C17.7343 32.4803 17.6953 29.5897 19.4433 27.8514L46.0058 1.28894C47.7539 -0.459108 50.6347 -0.420046 52.4218 1.36706ZM90.1855 39.121C91.9726 40.9081 92.0117 43.7987 90.2636 45.537L63.7011 72.0995C61.9531 73.8475 59.0722 73.8085 57.2851 72.0214C55.498 70.2343 55.459 67.3436 57.207 65.6053L83.7695 39.0428C85.5078 37.2948 88.3886 37.3339 90.1855 39.121Z"
                          fill="#FEE2E2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
               <div className="flex justify-center mt-20">
               <CircularIndeterminate></CircularIndeterminate>
               </div>
          </div>
        )}
      </ProtectedLayout>
    </>
  );
};

export async function getServerSideProps({ req }: any) {
  const session = await getSession({ req });
  console.log(session, "session at home page ");    
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default MyCases;
