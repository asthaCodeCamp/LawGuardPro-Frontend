import CaseDetails from "@/components/CaseInfo/CaseDetails";
import CaseInfoHeader from "@/components/CaseInfo/CaseInfoHeader";
import CaseLayout from "@/components/layout/CaseLayout";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import { useGetSingleCase } from "@/modules/SingleCase/SingleCase.hooks";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
interface CaseInfoHeaderProps {
  caseNumber: string;
  lastUpdated: string;
}

interface CaseData {
  caseId: string;
  caseName: string;
  caseNumber: string;
  lastUpdated: string;
  status: string;
  totalPaid: number;
  totalQuoted: number;
  description: string;
  lawyerId: string;
  userId: string;
}

const CaseInfo = () => {
  const session = useSession();
  const router = useRouter();
  const { data } = useGetSingleCase(router.query?.caseId as string);

  // const [caseInfo, setCaseInfo] = useState<CaseInfoHeaderProps>({
  //   caseNumber: "",
  //   lastUpdated: "",
  // });

  const [cases, setCases] = useState(data);

  // const{caseNumber,lastUpdated}:CaseInfoHeaderProps=data;

  console.log("Single Case data === ", data);
  useEffect(() => {
    // console.log(session, "at notification useEffect");
    // console.log("router at case info ===", router);

    if (session?.data) {
      if (session?.status !== "authenticated") {
        router.push("/login");
      }
    }
    console.log("UseEffect cases === ", cases);

    setCases(data);
    // else {
    //   router.push("/login");
    // }
  }, [session]);
  return (
    <div>
      <ProtectedLayout>
        <div className="w-full">
          <div>
            <CaseInfoHeader
              caseNumber={cases?.data?.caseNumber}
              lastUpdated={cases?.data?.lastUpdated}
            />
          </div>
          <div className="w-full">
            <CaseLayout>
              <CaseDetails description={cases?.data?.description} />
            </CaseLayout>
          </div>
        </div>
      </ProtectedLayout>
    </div>
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

export default CaseInfo;
