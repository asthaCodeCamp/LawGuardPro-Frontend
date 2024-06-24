// export class MyCases{
//     static 
// }

export const getAllQuotes = async ({caseId, accessToken } : {caseId: string ,accessToken?: string  }) =>{
  const response = await fetch(`http://54.203.205.46:5140/api/quote/quote_list?caseId=${caseId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    });
  return response.json()
}
