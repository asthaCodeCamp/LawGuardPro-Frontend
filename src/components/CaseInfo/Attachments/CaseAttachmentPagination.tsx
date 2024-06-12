import { Pagination, Stack } from "@mui/material";
import { useState } from "react";

const CaseAttachmentPagination = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={3}
        page={page}
        onChange={handleChange}
        sx={{
          "& .MuiPaginationItem-page.Mui-selected": {
            backgroundColor: "#AC1CFF",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#AC1CFF",
            },
          },
        }}
      />
    </Stack>
  );
};
export default CaseAttachmentPagination;
