export const getAllAttachments = async ({pageSize  , pageNumber,caseId , accessToken } : {pageSize: number , pageNumber: number ,accessToken?: string ,caseId:string }) =>{
    const response = await fetch(`http://54.203.205.46:5140/api/filecontroller/attachments?caseId=${caseId}&pageNumber=${pageNumber}&pageSize=${pageSize}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      });
    return response.json()
}



