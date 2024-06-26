import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/utilites/enums";
import { useSession } from "next-auth/react";
import { getLawyerByCaseId } from "./Lawyer.service";

export const useGetLawyerByCaseId = (caseID: string) => {
  const { data: session } = useSession();
  return useQuery({
    queryKey: [QueryKeys.lawyer, caseID],
    queryFn: async () => {
      const lawyer = await getLawyerByCaseId({
        caseID: caseID,
        accessToken: session?.accessToken,
      });
      return lawyer;
    },
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    enabled: !!session?.accessToken,
    retry: 1,
  });
};
