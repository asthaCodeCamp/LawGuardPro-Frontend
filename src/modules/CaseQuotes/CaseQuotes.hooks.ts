import { useQuery } from "@tanstack/react-query";
import { getAllQuotes } from "./CaseQuotes.service";
import { QuoteKeys } from "@/utilites/QuoteKeys";
import { useSession } from "next-auth/react";

export const useGetAllQuotes  = (caseId:string) =>{
    const session  = useSession();
    return useQuery({
        queryKey: [QuoteKeys.quotes],
        queryFn: async () =>{
            const quotes = await getAllQuotes({caseId:caseId,accessToken: session.data?.accessToken})
            return quotes;
        },
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        enabled: !!session.data?.accessToken,
        retry: 1,
    })
}

