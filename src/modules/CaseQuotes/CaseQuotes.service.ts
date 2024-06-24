// export class MyCases{
//     static
// }

export const getAllQuotes = async ({
  caseId,
  accessToken,
}: {
  caseId: string;
  accessToken?: string;
}) => {
  const response = await fetch(
    `http://54.203.205.46:5140/api/quote/quote_list?caseId=${caseId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.json();
};
//create a new quote with fetch post method in body it will take caseid , lawer id , value and total value

export const createQuote = async ({
  caseId,
  lawyerId,
  value,
  totalValue,
  accessToken,
}: {
  caseId: string;
  lawyerId: string;
  value: number;
  totalValue: number;
  accessToken?: string;
}) => {
  const response = await fetch("http://54.203.205.46:5140/api/quote/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      caseId,
      lawyerId,
      value,
      totalValue,
    }),
  });
  return response.json();
};
