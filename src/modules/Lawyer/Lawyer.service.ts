export const getLawyerByCaseId = async ({
  caseID,
  accessToken,
}: {
  caseID: string;
  accessToken?: string;
}) => {
  const response = await fetch(
    `https://lawguardpro-api.saams.xyz/api/lawyer/${caseID}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.json();
};
