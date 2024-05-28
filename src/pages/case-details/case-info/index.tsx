import CaseDetails from "@/components/CaseInfo/CaseDetails";
import CaseLayout from "@/components/layout/CaseLayout";
import ProtectedLayout from "@/components/layout/ProtectedLayout";

const PersonalInfo = () => {
    return (
      <ProtectedLayout>
        <div className="flex">
         <CaseLayout>
            <CaseDetails/>
         </CaseLayout>
        </div>
      </ProtectedLayout>
    );
  };
  
  export default PersonalInfo;