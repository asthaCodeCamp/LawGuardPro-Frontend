import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import CasesHeader from './CasesHeader';
import CaseTable from './CaseTable';
import { useSession } from 'next-auth/react';
import AddCaseDashboard from './AddCaseDashboard';

interface CaseUpdateProps { }

function createData(
  caseno: string,
  casetitle: string,
  lastupdate: string,
  status: string
) {
  return { caseno, casetitle, lastupdate, status };
}

const rows = [
  createData('012546', 'Share Transfers & Share Issuance', '20/1023', 'working'),
  createData('012546', 'Share Transfers & Share Issuance', '20/1023', 'working'),
];

const CaseUpdate: React.FC<CaseUpdateProps> = ({ casesData }: any) => {
  const session = useSession();
  const [caseData, setCasesData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const parPage = 5;
  React.useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await fetch(`http://54.203.205.46:5140/api/case/list?pageNumber=${page}&pageSize=${parPage}`, {
          headers: {
            Authorization: `Bearer ${session?.data?.accessToken}`,
          }
        });
        const result = await response.json();
        console.log("Cases", result);
        setCasesData(result.data);
        // setTotalPages(result.totalPages); 
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, [page, session]);
  const { totalCount }: any = caseData;
  return (
    <div className="mb-20">
      <div className="flex justify-between">
        <div className=" border-b ">
          <p className="text-[24px] font-[600] mt-[8px]">Case Updates</p>
          <p className="text-[16px] font-[400]">Check your case updates list.</p>
        </div>
        <div>
          <AddCaseDashboard casesData={caseData} />
        </div>
      </div>
      <div>
        <CaseTable casesData={caseData} />
      </div>
    </div>
  );
};

export default CaseUpdate;
