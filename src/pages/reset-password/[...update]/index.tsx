import UpdatePasswordForm from "@/components/UpdatePassword/UpdatePasswordForm";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const UpdatePassword = () => {
  const router = useRouter();
  console.log(router.query.update, "hello");
  const [idAndOtp, setOtpAndUserId] = useState<any>([]);

  // const session = useSession();
  // const router = useRouter();
  // const { data: session, status } = useSession();

  useEffect(() => {
    setOtpAndUserId(router.query.update);
  }, [router.query]);
  return (
    <>
      <UpdatePasswordForm idAndOtp={idAndOtp} />
    </>
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

export default UpdatePassword;
