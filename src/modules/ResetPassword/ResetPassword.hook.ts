import { useMutation } from "@tanstack/react-query";
import { ResetPassword } from "./ResetPassword.service";

export const useResetPassword = () => {
  return useMutation({
    mutationFn: async (resetData: {
      userId: string;
      otp: string;
      newPassword: string;
    }) => {
      const response = await ResetPassword({
        userId: resetData?.userId,
        otp: resetData?.otp,
        newPassword: resetData?.newPassword,
      });
      return response;
    },

    onSuccess: (data) => console.log("successfully reset password", data),
    onError: (error) => {
      console.log(error);
    },
  });
};
