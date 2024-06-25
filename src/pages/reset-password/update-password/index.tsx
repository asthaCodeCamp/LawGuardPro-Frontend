import UpdatePasswordForm from "@/components/UpdatePassword/UpdatePasswordForm";
import React from "react";

const UpdatePassword = () => {
  // const session = useSession();
  // const router = useRouter();
  // const { data: session, status } = useSession();

  // useEffect(() => {
  //   if (!session && status !== "loading") {
  //     router.push("/login");
  //   }
  // }, [session]);
  return (
    <>
      <UpdatePasswordForm />
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
