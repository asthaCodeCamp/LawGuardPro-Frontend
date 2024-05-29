import CaseDetails from "@/components/CaseInfo/CaseDetails";
import CaseinfoHeader from "@/components/CaseInfo/CaseinfoHeader";
import CaseLayout from "@/components/layout/CaseLayout";
import ProtectedLayout from "@/components/layout/ProtectedLayout";

const PersonalInfo = () => {
  return (
    <div>
      <ProtectedLayout>
        <div className="w-full">
          <div><CaseinfoHeader/></div>
          <div className="w-full">
            <CaseLayout>
              <CaseDetails />
            </CaseLayout>
          </div>
        </div>
      </ProtectedLayout>
    </div>
  );
};

export default PersonalInfo;