// export const getSetsById = async (setId: string) => {
//   let set = await PokemonTCG.findSetByID(setId);
//   //console.log("all sets ==== ",allSets)
//   return set;
// };

export const getSingleCase = async ({
  caseId,
  accessToken,
}: {
  caseId: string;
  accessToken?: string;
}) => {
  const response = await fetch(`http://54.203.205.46:5140/api/case/${caseId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.json();
};
