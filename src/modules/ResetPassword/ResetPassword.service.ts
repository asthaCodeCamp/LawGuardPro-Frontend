export const ResetPassword = async ({
  userId,
  otp,
  newPassword,
}: {
  userId: string;
  otp: string;
  newPassword: string;
}) => {
  const response = await fetch(
    "https://lawguardpro-api.saams.xyz/api/usersauth/resetforgottenpassword",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        otp,
        newPassword,
      }),
    }
  );
  return response.json();
};
