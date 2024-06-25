import { useQuery } from "@tanstack/react-query";
import { getAllQuotes } from "./CaseQuotes.service";
import { QuoteKeys } from "@/utilites/QuoteKeys";
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { createQuote } from "./CaseQuotes.service";

export const useGetAllQuotes = (caseId: string) => {
  const session = useSession();

  return useQuery({
    queryKey: [QuoteKeys.quotes],
    queryFn: async () => {
      const quotes = await getAllQuotes({
        caseId: caseId,
        accessToken: session.data?.accessToken,
      });
      return quotes;
    },
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    enabled: !!session.data?.accessToken,
    retry: 1,
  });
};

export const useCreateQuote = () => {
  const session = useSession();
  // console.log("session from use create quote:", session);

  return useMutation({
    mutationFn: async (quoteData: {
      lawerId: string;
      caseId: string;
      value: number;
      totalValue: number;
    }) => {
      const response = await createQuote({
        caseId: quoteData.caseId,
        lawyerId: quoteData.lawerId,
        value: quoteData.value,
        totalValue: quoteData.totalValue,
        accessToken: session.data?.accessToken,
      });
      return response;
    },

    onSuccess: (data) => console.log("successfully created quote", data),
    onError: (error) => {
      console.log(error);
    },
  });
};

// export const useUpdateSetName = () => {
//     const queryClient = useQueryClient();
//     return useMutation({
//       mutationFn: ({ setId, setName }: { setId: string; setName: string }) => {
//         return createQutoe(setId, setName);
//       },
//       onSuccess: (data, variables) => {
//         console.log("successfully updated");
//         //show a toast
//       },
//       onError: (error) => {
//         console.log(error);
//       },
//     });
//   };
