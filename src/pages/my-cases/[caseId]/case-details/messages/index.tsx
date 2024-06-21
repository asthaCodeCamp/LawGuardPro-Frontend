import CaseinfoHeader from "@/components/CaseInfo/CaseinfoHeader";
import Messages from "@/components/CaseInfo/Messages";
import CaseLayout from "@/components/layout/CaseLayout";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";


const meassage = ()=>{
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    console.log(session, "at notification useEffect");
    if (session?.status !== "authenticated") {
      router.push("/login");
    }
  }, [session]);
    return(
   
      <ProtectedLayout>
        <div className="w-full">
          <div><CaseinfoHeader/></div>
          <div className="w-full">
            <CaseLayout>
              <Messages/>
            </CaseLayout>
          </div>
        </div>
      </ProtectedLayout>
   
    )
}
export default meassage;