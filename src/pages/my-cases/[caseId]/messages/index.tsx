import CaseInfoHeader from "@/components/CaseInfo/CaseInfoHeaders";
import Messages from "@/components/CaseInfo/Messages";
import CaseLayout from "@/components/layout/CaseLayout";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import { useGetSingleCase } from "@/modules/SingleCase/SingleCase.hooks";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const message = () => {
  const router = useRouter();
  const { data } = useGetSingleCase(router.query?.caseId as string);
  const [cases, setCases] = useState(data);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/login");
    }
    setCases(data);
  }, [session]);

  return (
    <ProtectedLayout>
      <div className="w-full">
        <div>
          <CaseInfoHeader
            caseName={cases?.data?.caseName}
            caseNumber={cases?.data?.caseNumber}
            lastUpdated={cases?.data?.lastUpdated}
            status={cases?.data?.status}
          />
        </div>
        <div className="w-full">
          <CaseLayout>
            <Messages />
          </CaseLayout>
        </div>
      </div>
    </ProtectedLayout>
  );
};

export default message;
