import CaseAttachments from "@/components/CaseInfo/Attachments/CaseAttachments";
import CaseDetails from "@/components/CaseInfo/CaseDetails";
import CaseinfoHeader from "@/components/CaseInfo/CaseinfoHeader";
import CaseLayout from "@/components/layout/CaseLayout";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Attachments = () => {
  // const session = useSession();
  // const router = useRouter();
  // useEffect(() => {
  //   if (session?.status !== "authenticated") {
  //     router.push("/login");
  //   }
  // }, [session]);
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

export async function getServerSideProps({ req }: any) {
  const session = await getSession({ req });
  console.log( session , "session at home page ")
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session},
  };
}

export default Attachments;
