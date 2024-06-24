import CaseInfoHeader from "@/components/CaseInfo/CaseinfoHeader";
import Messages from "@/components/CaseInfo/Messages";
import CaseLayout from "@/components/layout/CaseLayout";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import { useGetSingleCase } from "@/modules/SingleCase/SingleCase.hooks";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const meassage = () => {
  const session = useSession();
  const router = useRouter();
  const { data } = useGetSingleCase(router.query?.caseId as string);
  const [cases, setCases] = useState(data);
  useEffect(() => {
    // console.log(session, "at notification useEffect");
    if (session?.data) {
      if (session?.status !== "authenticated") {
        router.push("/login");
      }
    }
    setCases(data);
    // else {
    //   router.push("/login");
    // }
  }, [session]);
  return (
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
            <Messages />
          </CaseLayout>
        </div>
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
export default meassage;
