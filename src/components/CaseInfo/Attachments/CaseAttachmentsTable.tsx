import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import manIcon from "../../../../public/assets/man.png";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import svgs from "@/components/svg/svg";
import Link from "next/link";

interface Upload {
  logo: string;
  name: string;
}

const CaseAttachmentsTable: React.FC<any> = ({ attachmentData }: any) => {
  const { data }: any = attachmentData;

  return (
    <div className="">
      {data?.length == 0 ? (
        <div className=" text-center font-bold text-[LawGuardPrimary] ">
          {" "}
          <h1>No Attachment Found </h1>
        </div>
      ) : (
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
                  <span className="text-[14px] text-[#6D6D6D]">
                    UPLOADED BY
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-[14px] text-[#6D6D6D]">ADDED</span>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row: any) => (
                <TableRow
                  key={row.title}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  className=""
                >
                  <Link
                    href={`https://lawguardpro-api.saams.xyz/files/${row.title}`}
                    passHref
                  >
                    <TableCell component="th" scope="row">
                      <span className="flex text-[14px] font-[400] pl-4">
                        <span className="mr-2">{svgs?.pdfIcon}</span>
                        {row.title}
                      </span>
                    </TableCell>
                  </Link>
                  <TableCell>
                    <span className="text-[14px] font-[400]">{row.type}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-[14px] font-[400] flex">
                      <Image
                        className="mr-2"
                        src={manIcon}
                        alt="logo"
                        height={24}
                        width={24}
                      />
                      {row.uploadedBy}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-[14px] font-[400]">
                      {row.addedOn}
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
      )}
    </div>
  );
};

export default CaseAttachmentsTable;
