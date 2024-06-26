import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/utilites/enums";
import { useSession } from "next-auth/react";
import { getSingleCase } from "./SingleCase.service";

export const useGetSingleCase = (caseId: string) => {
  const session = useSession();
  return useQuery({
    queryKey: [QueryKeys.case, caseId],
    queryFn: async () => {
      const singleCase = await getSingleCase({
        caseId: caseId,
        accessToken: session?.data?.accessToken,
      });
      return singleCase;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    enabled: true,
    retry: 1,
    retryDelay: 3000,
  });
};
