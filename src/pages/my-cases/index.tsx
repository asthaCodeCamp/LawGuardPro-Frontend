import CasePagination from "@/components/Case/CasePagination";
import CaseTable from "@/components/Case/CaseTable";
import CaseUpadate from "@/components/Case/CaseUpadate";
import CaseHeader from "@/components/Case/CasesHeader";
import AddCaseMoadal from "@/components/Modals/AddCaseModal";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import { useGetAllCases } from "@/modules/MyCases/MyCases.hooks";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const MyCases = () => {
  const session = useSession();
  const router = useRouter();

  // const [caseData, setCasesData] = useState([]);
  const [page, setPage] = useState(1);
  // const [pageSize] = useState(5);
  // const [totalPages, setTotalPages] = useState(1);
  // const [totalCount , setTotalCount] = useState<number>(0)
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

  useEffect(() => {
    if (session.data) {
      if (session?.status !== "authenticated") {
        router.push("/login");
      }
    } else {
      router.push("/login");
    }
  }, [session]);

  return (
    <>
      <ProtectedLayout>
        {data && (
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
            )
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