import CaseAttachments from "@/components/CaseInfo/Attachments/CaseAttachments";
import CaseInfoHeader from "@/components/CaseInfo/CaseInfoHeaders";
import CaseLayout from "@/components/layout/CaseLayout";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import { useGetAllAttachments } from "@/modules/Attachments/Attachments.hooks";
import { useGetSingleCase } from "@/modules/SingleCase/SingleCase.hooks";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Attachments = () => {
  const router = useRouter();
  const { data } = useGetSingleCase(router.query?.caseId as string);
  const [cases, SetCases] = useState(data);
  const { data: session, status } = useSession();
  const caseId = router.query?.caseId as string;
  const pageSize = 10;
  const pageNumber = 1;
  const attachmentData = useGetAllAttachments({ pageSize, pageNumber, caseId });

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/login");
    }
  }, [session]);

  return (
    <ProtectedLayout>
      <div className="flex flex-col w-full">
        <div>
          <CaseInfoHeader
            caseName={cases?.data?.caseName}
            caseNumber={cases?.data?.caseNumber}
            lastUpdated={cases?.data?.lastUpdated}
            status={cases?.data?.status}
          />
        </div>
        <CaseLayout>
          <CaseAttachments attachmentData={attachmentData} />
        </CaseLayout>
      </div>
    </ProtectedLayout>
  );
};

export default Attachments;
