import CaseDetails from "@/components/CaseInfo/CaseDetails";
import CaseinfoHeader from "@/components/CaseInfo/CaseinfoHeader";
import CaseLayout from "@/components/layout/CaseLayout";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PersonalInfo = () => {
  const session  = useSession();
  const router = useRouter();
  useEffect(() => {
    if(session.data){
      if (session?.status !== "authenticated") {
        router.push("/login");
      }
    }else{
      router.push("/login");
    }
  }, [session]);
  return (
    <div>
      <ProtectedLayout>
        <div className="w-full">
          <div><CaseinfoHeader/></div>
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

export default PersonalInfo;