import { useQuery } from "@tanstack/react-query";
// import { getAllCases } from "./MyCases.service";
import { QueryKeys } from "@/utilites/enums";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getSingleCase } from "./SingleCase.service";

export const useGetSingleCase  = (caseId: string) =>{
    const session  = useSession();
    const router = useRouter();
    // return useQuery({
    //     queryKey: [QueryKeys.case , query?.],
    //     queryFn: async () =>{
    //         const cases = await getAllCases({pageNumber: pageNumber , pageSize: pageSize , accessToken: session.data?.accessToken})
    //         return cases.data as {totalCount : number}
    //     },
    //     refetchOnMount: true,
    //     refetchOnWindowFocus: false,
    //     enabled: !!session.data?.accessToken,
    //     retry: 1,
    // })
    return useQuery({
      queryKey: [QueryKeys.case, caseId ],
      queryFn: async () => {
        const singleCase = await getSingleCase({caseId:caseId,accessToken: session?.data?.accessToken});
        return singleCase;
      },
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      enabled: true,
      retry: 1,
      retryDelay: 3000,
    });
}