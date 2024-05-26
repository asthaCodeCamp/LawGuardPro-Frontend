import DashboardMain from "@/components/DashBoard/DashboardMain";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
export default function Home() {
  return (
    <div>
      <ProtectedLayout>
        {/* <Header/> */}
        <DashboardMain/>
      </ProtectedLayout>
    </div>
  );
}
