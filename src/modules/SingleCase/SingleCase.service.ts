export const getSingleCase = async ({
  caseId,
  accessToken,
}: {
  caseId: string;
  accessToken?: string;
}) => {
  const response = await fetch(
    `https://lawguardpro-api.saams.xyz/api/case/${caseId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.json();
};
