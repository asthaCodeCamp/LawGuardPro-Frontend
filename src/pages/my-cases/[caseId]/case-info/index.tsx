import CaseDetails from "@/components/CaseInfo/CaseDetails";
import CaseInfoHeader from "@/components/CaseInfo/CaseinfoHeader";
import CircularIndeterminate from "@/components/Spinner/Spinner";
import CaseLayout from "@/components/layout/CaseLayout";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import { useGetSingleCase } from "@/modules/SingleCase/SingleCase.hooks";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CaseInfo = () => {
  // const session = useSession();
  const router = useRouter();
  const { data } = useGetSingleCase(router.query?.caseId as string);

  // const [caseInfo, setCaseInfo] = useState<CaseInfoHeaderProps>({
  //   caseNumber: "",
  //   lastUpdated: "",
  // });

  // const [cases, setCases] = useState(data);

  // const{caseNumber,lastUpdated}:CaseInfoHeaderProps=data;

  console.log("Single Case data === ", data);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/login");
    }
  }, [session]);
  return (
    <div>
      <ProtectedLayout>
        <div className="w-full">
          <div>
            {data ? (
              <CaseInfoHeader
                caseNumber={data?.data?.caseNumber}
                lastUpdated={data?.data?.lastUpdated}
              />
            ) : (
              <CaseInfoHeader caseNumber="#00032" lastUpdated={"2024/05/30"} />
            )}
          </div>
          <div className="w-full">
            <CaseLayout>
              {data ? (
                <CaseDetails
                  description={data?.data?.description}
                  totalQuoted={data?.data?.totalQuoted}
                  totalPaid={data?.data?.totalPaid}
                />
              ) : (
                <CircularIndeterminate />
              )}
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
