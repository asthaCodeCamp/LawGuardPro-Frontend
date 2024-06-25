import CaseinfoHeader from "@/components/CaseInfo/CaseinfoHeader";
import Messages from "@/components/CaseInfo/Messages";
import CaseLayout from "@/components/layout/CaseLayout";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import { useGetSingleCase } from "@/modules/SingleCase/SingleCase.hooks";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const meassage = () => {
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
    <ProtectedLayout>
      <div className="w-full">
        <div>
          <CaseinfoHeader caseNumber={caseNumber} lastUpdated={lastUpdated} />
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
