import CaseHeader from "@/components/Case/CasesHeader";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import React from "react";

const MyCases = () => {
  return (
    <>
      <ProtectedLayout>
        
            <CaseHeader></CaseHeader>
          
      </ProtectedLayout>
    </>
  );
};

export default MyCases;
