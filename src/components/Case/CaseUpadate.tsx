import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";

function createData(
    caseno: string,
    casetitle: string,
    lastupdate: string,
    status: string,
) {
    return { caseno, casetitle, lastupdate, status, };
}

const rows = [
    createData("012546", "Share Transfers & Share Issuance", "20/1023", "working"),
    createData("012546", "Share Transfers & Share Issuance", "20/1023", "working"),
];

export default function BasicTable() {
    return (
        <div className="mb-20">
            <div className='flex justify-between'>
            <div className="m-[32px]">
                <p className="text-[24px] font-[600] mt-[8px]">Case Updates</p>
                <p className="text-[16px] font-[400]">Check your case updates list.</p>
            </div>
            <Button className="bg-[#6B0F99] hover:bg-[#6B0F99] text-[16px] font-[600] mr-[32px] h-[40px] mt-[42px]" variant="contained">+ Add new case</Button>
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><span className="text-[16px] text-[#6D6D6D]">CASE NO</span></TableCell>
                                <TableCell ><span className="text-[16px] text-[#6D6D6D]">CASE TITLE</span></TableCell>
                                <TableCell align="right"><span className="text-[16px] text-[#6D6D6D]">LAST UPDATED</span></TableCell>
                                <TableCell align="right"><span className="text-[16px] text-[#6D6D6D]">STATUS</span></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row?.caseno}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <span className="text-[16px] font-[400]">{row?.caseno}</span>
                                    </TableCell>
                                    <TableCell ><span className="text-[16px] font-[400]">{row?.casetitle}</span></TableCell>
                                    <TableCell align="center"><span className="text-[16px] font-[400]">{row?.lastupdate}</span></TableCell>
                                    <TableCell align="right"><span className="text-[16px] font-[400] text-[#16A34A] border-2 px-3 rounded-2xl border-[#16A34A] py-1">{row?.status}</span></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
