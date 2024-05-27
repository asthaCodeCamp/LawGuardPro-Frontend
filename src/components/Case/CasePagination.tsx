import { createStyles, makeStyles, styled } from "@mui/material/styles";
// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Theme } from "@emotion/react";

export default function CasePagination() {
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={3} page={page} onChange={handleChange} />
    </Stack>
  );
}