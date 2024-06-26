import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function CasePagination({ pages, setPage, casesData }: any) {
  const { totalCount } = casesData;
  let totalPage = Math.ceil(totalCount / 5);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPage}
        page={pages}
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
}
