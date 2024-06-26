import { useQuery } from "@tanstack/react-query";
import { getAllCases } from "./MyCases.service";
import { QueryKeys } from "@/utilites/enums";
import { useSession } from "next-auth/react";

export const useGetAllCases = ({
  pageSize,
  pageNumber,
}: {
  pageSize: number;
  pageNumber: number;
}) => {
  const { data: session } = useSession();
  return useQuery({
    queryKey: [QueryKeys.cases, pageSize, pageNumber],
    queryFn: async () => {
      const cases = await getAllCases({
        pageNumber: pageNumber,
        pageSize: pageSize,
        accessToken: session?.accessToken,
      });
      return cases.data as { totalCount: number };
    },
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    enabled: !!session?.accessToken,
    retry: 1,
  });
};
