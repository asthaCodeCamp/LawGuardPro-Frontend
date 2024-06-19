import CasePagination from "@/components/Case/CasePagination";
import CaseTable from "@/components/Case/CaseTable";
import CaseUpadate from "@/components/Case/CaseUpadate";
import CaseHeader from "@/components/Case/CasesHeader";
import AddCaseMoadal from "@/components/Modals/AddCaseModal";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import React, { useState } from "react";

const MyCases = () => {
  // const [showModal , setShowModal] = useState(false);
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
        <AddCaseMoadal/>
      </ProtectedLayout>
    </>
  );
};

export default MyCases;
