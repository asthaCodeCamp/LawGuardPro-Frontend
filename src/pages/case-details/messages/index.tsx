import CaseinfoHeader from "@/components/CaseInfo/CaseinfoHeader";
import Messages from "@/components/CaseInfo/Messages";
import CaseLayout from "@/components/layout/CaseLayout";
import ProtectedLayout from "@/components/layout/ProtectedLayout";


const meassage = ()=>{
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