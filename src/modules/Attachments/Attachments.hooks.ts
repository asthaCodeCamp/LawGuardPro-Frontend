import { useQuery } from "@tanstack/react-query";
// import { getAllCases } from "./MyCases.service";
import { QueryKeys } from "@/utilites/enums";
import { useSession } from "next-auth/react";
import { getAllAttachments } from "./Attachments.service";

export const useGetAllAttachments  = ({pageSize , pageNumber }: {pageSize: number , pageNumber: number }) =>{
    const session  = useSession();
    return useQuery({
        queryKey: [QueryKeys.cases , pageSize , pageNumber],
        queryFn: async () =>{
            const cases = await getAllAttachments({pageNumber: pageNumber , pageSize: pageSize , accessToken: session.data?.accessToken})
            return cases.data as {totalCount : number}
        },
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        enabled: !!session.data?.accessToken,
        retry: 1,
    })
}

