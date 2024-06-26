import UpdatePasswordForm from "@/components/UpdatePassword/UpdatePasswordForm";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const UpdatePassword = () => {
  const router = useRouter();
  const [idAndOtp, setOtpAndUserId] = useState<any>([]);

  useEffect(() => {
    setOtpAndUserId(router.query.update);
  }, [router.query]);

  return (
    <>
      <UpdatePasswordForm idAndOtp={idAndOtp} />
    </>
  );
};

export default UpdatePassword;
