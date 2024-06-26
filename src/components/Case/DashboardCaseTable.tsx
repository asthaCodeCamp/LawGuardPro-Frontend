import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const DashboardCaseTable = ({ casesData }: any) => {
  const { cases } = casesData;
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
            {cases?.map((row: any) => (
              <TableRow
                key={row.caseId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link href={`my-cases/${row.caseId}/case-info`}>
                    <span className="text-[14px] font-[400] ml-[32px]">
                      {row.caseNumber}
                    </span>
                  </Link>
                </TableCell>
                <TableCell>
                  <span className="text-[12px] font-[400]">{row.caseName}</span>
                </TableCell>

                <TableCell>
                  <span className="text-[12px] font-[400]">
                    {row.lastUpdated}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`text-[14px] font-[400] border-2 px-3 rounded-2xl mr-[34px] py-1 ${
                      row.status === "closed"
                        ? "text-[#6D6D6D] border-[#D1D1D1]"
                        : "text-[#16A34A] border-[#16A34A]"
                    }`}
                  >
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DashboardCaseTable;
