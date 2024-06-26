import DashboardMain from "@/components/DashBoard/DashboardMain";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Home() {
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
        <DashboardMain />
      </ProtectedLayout>
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
