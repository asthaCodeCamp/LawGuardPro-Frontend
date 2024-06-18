import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";

interface CaseData {
  case_no: string;
  case_title: string;
  total_quoted: number;
  total_paid: number;
  last_updated: string;
  tasks: number;
  status: string;
}

import caseData from "../../services/fakeData/caseData.json";
import Link from "next/link";

export default function CaseTable() {
  const [data, setData] = useState<CaseData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setData(caseData as CaseData[]);
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <span className="text-[14px] text-[#6D6D6D] ml-[32px]">
                  CASE NO.
                </span>
              </TableCell>
              <TableCell>
                <span className="text-[14px] text-[#6D6D6D]">CASE TITLE</span>
              </TableCell>
              <TableCell >
                <span className="text-[14px] text-[#6D6D6D]">TOTAL QUOTED</span>
              </TableCell>
              <TableCell >
                <span className="text-[14px] text-[#6D6D6D]">TOTAL PAID</span>
              </TableCell>
              <TableCell >
                <span className="text-[14px] text-[#6D6D6D]">LAST UPDATED</span>
              </TableCell>
              
              <TableCell >
                <span className="text-[14px] text-[#6D6D6D] mr-[32px]">
                  STATUS
                </span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.case_no}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <Link href={`my-case/${row.case_no}`}>
                  <TableCell component="th" scope="row">
                    <span className="text-[14px] font-[400] ml-[32px]">
                      {row.case_no}
                    </span>
                  </TableCell>
                </Link>
                <TableCell>
                  <span className="text-[14px] font-[400]">
                    {row.case_title}
                  </span>
                </TableCell>
                <TableCell >
                  <span className="text-[14px] font-[400]">
                    ${row.total_quoted}
                  </span>
                </TableCell>
                <TableCell >
                  <span className="text-[14px] font-[400]">
                    ${row.total_paid}
                  </span>
                </TableCell>
                <TableCell >
                  <span className="text-[14px] font-[400]">
                    {row.last_updated}
                  </span>
                </TableCell>
                
                <TableCell >
                  <span
                    className={`text-[16px] font-[400] border-2 px-3 rounded-2xl mr-[34px] py-1 ${
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
}
