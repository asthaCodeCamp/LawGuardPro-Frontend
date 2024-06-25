import CaseAttachments from "@/components/CaseInfo/Attachments/CaseAttachments";
import CaseInfoHeader from "@/components/CaseInfo/CaseInfoHeaders";
import CaseLayout from "@/components/layout/CaseLayout";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import { useGetSingleCase } from "@/modules/SingleCase/SingleCase.hooks";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// interface CaseInfoHeaderProps {
//   caseNumber: string;
//   lastUpdated: string;
// }

// interface CaseData {
//   caseId: string;
//   caseName: string;
//   caseNumber: string;
//   lastUpdated: string;
//   status: string;
//   totalPaid: number;
//   totalQuoted: number;
// }
const Attachments = () => {
  // const session = useSession();
  const router = useRouter();
  const { data } = useGetSingleCase(router.query?.caseId as string);
  const [cases, SetCases] = useState(data);
  const { data: session, status } = useSession();

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
            caseNumber={cases?.data?.caseNumber}
            lastUpdated={cases?.data?.lastUpdated}
          />
        </div>

        <CaseLayout>
          <CaseAttachments />
        </CaseLayout>
      </div>
    </ProtectedLayout>
  );
};

export async function getServerSideProps({ req }: any) {
  const session = await getSession({ req });
  console.log(session, "session at home page ");
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default Attachments;
