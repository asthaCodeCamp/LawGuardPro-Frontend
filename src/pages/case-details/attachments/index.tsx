import CaseAttachments from "@/components/CaseInfo/Attachments/CaseAttachments";
import CaseDetails from "@/components/CaseInfo/CaseDetails";
import CaseinfoHeader from "@/components/CaseInfo/CaseinfoHeader";
import CaseLayout from "@/components/layout/CaseLayout";
import ProtectedLayout from "@/components/layout/ProtectedLayout";

const Attachments = () => {
  return (
    <ProtectedLayout>
      <div className="flex flex-col w-full">
        <div>
          <CaseinfoHeader />
        </div>

        <CaseLayout>
          <CaseAttachments />
        </CaseLayout>
      </div>
    </ProtectedLayout>
  );
};

export default Attachments;
