import CasePagination from "@/components/Case/CasePagination";
import CaseTable from "@/components/Case/CaseTable";
import CaseUpadate from "@/components/Case/CaseUpadate";
import CaseHeader from "@/components/Case/CasesHeader";
import AddCaseMoadal from "@/components/Modals/AddCaseModal";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const MyCases = () => {
  const session  = useSession();
  const router = useRouter();
  useEffect(() => {
    console.log(session, "at notification useEffect");
    if (session?.status !== "authenticated") {
      router.push("/login");
    }
  }, [session]);

   


  const [caseData, setCasesData] = useState([]);
  const [page, setPage] = useState(1);
  const parPage = 5;
  // const [pageSize] = useState(5);
  // const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await fetch(`http://54.203.205.46:5140/api/case/list?pageNumber=${page}&pageSize=${parPage}`, {
          headers: {
            Authorization: `Bearer ${session?.data?.accessToken}`,
          }
        });
        const result = await response.json();
        console.log("Cases", result);
        setCasesData(result.data);
        // setTotalPages(result.totalPages); 
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, [page, session]);
  console.log("Case HEader",caseData);
const {totalCount}:any = caseData;

  return (
    <>
      <ProtectedLayout>
        <div className="w-full">
          <CaseHeader casesData={caseData} />
          <CaseTable casesData={caseData} />
          <div className="flex  my-[36px] mx-auto  justify-between ">
            <div className="ml-[48px] ">
              {" "}
              <h2>{totalCount} Cases found</h2>
            </div>
            <div className=" mr-48">
              <CasePagination casesData={caseData} pages={page} setPage={setPage} ></CasePagination> 
            </div>
            <div className="">
              
            </div>
          </div>
        </div>
      </ProtectedLayout>
    </>
  );
};

export default MyCases;
