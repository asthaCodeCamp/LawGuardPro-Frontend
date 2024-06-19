import DashboardMain from "@/components/DashBoard/DashboardMain";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import { getSession, useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
export default function Home() {
  const { data: session } = useSession();
  // console.log("Home session === ", session);
  return (
    <div>
      {session && (
        <ProtectedLayout>
          {/* <Header/> */}
          <DashboardMain />
        </ProtectedLayout>
      )}
    </div>
  );
}

export async function getServerSideProps({ req }: any) {
  const session = await getSession({ req });

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
