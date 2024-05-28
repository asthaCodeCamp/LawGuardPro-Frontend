import CaseDetails from "@/components/CaseInfo/CaseDetails";
import CaseinfoHeader from "@/components/CaseInfo/CaseinfoHeader";
import CaseLayout from "@/components/layout/CaseLayout";
import ProtectedLayout from "@/components/layout/ProtectedLayout";

const PersonalInfo = () => {
  return (
    <div>
      <ProtectedLayout>
        <div className="flex flex-col">
          <div><CaseinfoHeader/></div>
          <div className="flex">
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