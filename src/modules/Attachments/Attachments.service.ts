export const getAllAttachments = async ({pageSize  , pageNumber , accessToken } : {pageSize: number , pageNumber: number ,accessToken?: string  }) =>{
    const response = await fetch(`http://54.203.205.46:5140/api/case/list?pageNumber=${pageNumber}&pageSize=${pageSize}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      });
    return response.json()
}
