export const getAllAttachments = async ({
  pageSize,
  pageNumber,
  caseId,
  accessToken
}: {
  pageSize: number;
  pageNumber: number;
  caseId: string;
  accessToken?: string;
}) => {
  const response = await fetch(
    `https://lawguardpro-api.saams.xyz/api/filecontroller/attachments?pageNumber=${pageNumber}&pageSize=${pageSize}&caseId=${caseId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.json();
};
