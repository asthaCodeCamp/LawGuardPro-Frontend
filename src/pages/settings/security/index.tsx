import ProtectedLayout from "@/components/layout/ProtectedLayout";
import React, { useEffect } from "react";
import Settings from "..";
import SettingsLayout from "@/components/layout/SettingsLayout";
import { Box, Divider } from "@mui/material";
import SecurityComponent from "@/components/Settings/SecurityComponent";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Security = () => {
  // const session = useSession();
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/login");
    }
  }, [session]);
  return (
    <ProtectedLayout>
      <div className="w-full ">
        <SettingsLayout>
          <div className=" w-full">
            <SecurityComponent />
          </div>
        </SettingsLayout>
      </div>
    </ProtectedLayout>
  );
};

// export async function getServerSideProps({ req }: any) {
//   const session = await getSession({ req });
//   console.log(session, "session at home page ");
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: { session },
//   };
// }

export default Security;
