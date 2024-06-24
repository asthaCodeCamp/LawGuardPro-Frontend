import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const DashboardSkeleton = () => {
  return (
    <div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <span className="text-[12px] text-[#6D6D6D] ml-[32px]">
                  CASE NO.
                </span>
              </TableCell>
              <TableCell>
                <span className="text-[12px] text-[#6D6D6D]">CASE TITLE</span>
              </TableCell>
              <TableCell>
                <span className="text-[12px] text-[#6D6D6D]">LAST UPDATED</span>
              </TableCell>
              <TableCell>
                <span className="text-[12px] text-[#6D6D6D] mr-[32px]">
                  STATUS
                </span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <span className="text-[14px] font-[400] ml-[32px]">
                  <Skeleton
                    variant="rectangular"
                    width={50}
                    height={30}
                  />
                </span>
              </TableCell>
              <TableCell>
                <span className="text-[12px] font-[400]">
                  <Skeleton
                    className="mt-3"
                    variant="rectangular"
                    width={50}
                    height={30}
                  />
                </span>
              </TableCell>

              <TableCell>
                <span className="text-[12px] font-[400]">
                  <Skeleton
                    className="mt-3"
                    variant="rectangular"
                    width={50}
                    height={30}
                  />
                </span>
              </TableCell>
              <TableCell>
                <span
                  className={`text-[14px] font-[400] border-2 px-3 rounded-2xl mr-[34px] py-1`}
                >
                  <Skeleton
                    className="mt-3"
                    variant="rectangular"
                    width={50}
                    height={30}
                  />
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DashboardSkeleton;
