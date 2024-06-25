export const getAllAttachments = async ({
  pageSize,
  pageNumber,
  accessToken,
}: {
  pageSize: number;
  pageNumber: number;
  accessToken?: string;
}) => {
  const response = await fetch(
    `https://lawguardpro-api.saams.xyz/api/case/list?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.json();
};
