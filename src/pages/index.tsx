import DashboardMain from "@/components/DashBoard/DashboardMain";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import { getSession, useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Home() {
  // const { data: session } = useSession();
  // console.log("Home session === ", session);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/login");
    }
  }, [session]);

  return (
    <div>
      <ProtectedLayout>
        {/* <Header/> */}
        <DashboardMain />
      </ProtectedLayout>
    </div>
  );
}

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
