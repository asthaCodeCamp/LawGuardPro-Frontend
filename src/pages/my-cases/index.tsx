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

   


  const [cases, setCases] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await fetch(`http://54.203.205.46:5140/api/case/list?pageNumber=${page}&pageSize=${pageSize}`, {
          headers: {
            Authorization: `Bearer ${session?.data?.accessToken}`,
          }
        });
        const result = await response.json();
        console.log("Cases", result);
        setCases(result.data);
        setTotalPages(result.totalPages);  // Assuming your API returns totalPages
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, [page, pageSize, session]);


  return (
    <>
      <ProtectedLayout>
        <div className="w-full">
          <CaseHeader />
          <CaseTable />
          <div className="flex  my-[36px] mx-auto  justify-between ">
            <div className="ml-[48px] ">
              {" "}
              <h2>5 Cases found</h2>
            </div>
            <div className=" mr-48">
              <CasePagination></CasePagination> 
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
