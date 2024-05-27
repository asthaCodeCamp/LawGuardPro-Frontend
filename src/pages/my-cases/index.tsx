import CaseTable from "@/components/Case/CaseTable";
import CaseUpadate from "@/components/Case/CaseUpadate";
import CaseHeader from "@/components/Case/CasesHeader";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import React from "react";

const MyCases = () => {
  return (
    <>
      <ProtectedLayout>
        <div className="w-full">
          <CaseHeader />
          <CaseTable />
        </div>
      </ProtectedLayout>
    </>
  );
};

export default MyCases;
