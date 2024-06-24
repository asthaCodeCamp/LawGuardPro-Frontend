import CaseDetails from "@/components/CaseInfo/CaseDetails";
import CaseinfoHeader from "@/components/CaseInfo/CaseInfoHeader";
import CaseLayout from "@/components/layout/CaseLayout";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import { useGetSingleCase } from "@/modules/SingleCase/SingleCase.hooks";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PersonalInfo = () => {
  const session = useSession();
  const router = useRouter();
  const { data, isPending } = useGetSingleCase(router.query?.caseId as string);
  const { caseNumber, lastUpdated } = data;
  useEffect(() => {
    console.log(session, "at notification useEffect");
    if (session?.data) {
      if (session?.status !== "authenticated") {
        router.push("/login");
      }
    }
    // else {
    //   router.push("/login");
    // }
  }, [session]);
  return (
    <div>
      <ProtectedLayout>
        <div className="w-full">
          <div>
            <CaseinfoHeader caseNumber={caseNumber} lastUpdated={lastUpdated} />
          </div>
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

export default PersonalInfo;
