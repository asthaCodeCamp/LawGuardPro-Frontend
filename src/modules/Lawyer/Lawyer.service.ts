export const getLawyerByCaseId = async ({caseID  , accessToken } : {caseID: string ,accessToken?: string  }) =>{
    const response = await fetch(`http://54.203.205.46:5140/api/lawyer/${caseID}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      });
    return response.json()
}
