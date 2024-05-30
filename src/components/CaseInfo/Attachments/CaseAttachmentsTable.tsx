import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";

import caseAttachments from "./CaseAttachmentData";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import svgs from "@/components/svg/svg";

interface Upload {
  logo: string;
  name: string;
}
// Define the type for your case data
interface CaseAttachments {
  title: string;
  type: string;
  uploaded_by: Upload;
  addedDate: string;
}

const CaseAttachmentsTable = () => {
  const [data, setData] = useState<CaseAttachments[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setData(caseAttachments as CaseAttachments[]);
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <span className="text-[14px] text-[#6D6D6D] pl-4">TITLE</span>
              </TableCell>
              <TableCell>
                <span className="text-[14px] text-[#6D6D6D] ">TYPE</span>
              </TableCell>
              <TableCell>
                <span className="text-[14px] text-[#6D6D6D]">UPLOADED BY</span>
              </TableCell>
              <TableCell>
                <span className="text-[14px] text-[#6D6D6D]">ADDED</span>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className=""
              >
                <TableCell component="th" scope="row">
                  <span className="flex text-[14px] font-[400] pl-4">
                    <span className="mr-2">
                      {row.type === "PDF" ? svgs?.pdfIcon : svgs?.docIcon}
                    </span>
                    {row.title}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-[14px] font-[400]">{row.type}</span>
                </TableCell>
                <TableCell>
                  <span className="text-[14px] font-[400] flex">
                    <Image
                      src={row.uploaded_by.logo}
                      alt={row.uploaded_by.name}
                      height={24}
                      width={24}
                      className="h-6 w-6 rounded-full mr-2"
                    />
                    {row.uploaded_by.name}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-[14px] font-[400]">
                    {row.addedDate}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-[14px] font-[400]">
                    <MoreVertOutlinedIcon />
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

export default CaseAttachmentsTable;
