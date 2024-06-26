import * as React from "react";
import AddCaseDashboard from "./AddCaseDashboard";
import DashboardCaseTable from "./DashboardCaseTable";
import { useGetAllCases } from "@/modules/MyCases/MyCases.hooks";
import DashboardSkeleton from "../Skeleton/DashboardSkeleton";

const CaseUpdate: React.FC<any> = ({ casesData }: any) => {
  const [caseData, setCasesData] = React.useState([]);
  const page = 1;
  const { data, isPending } = useGetAllCases({ pageSize: 2, pageNumber: page });

  return (
    <div className="mb-20">
      <div className="flex justify-between ml-10">
        <div className=" border-b ">
          <p className="text-[24px] font-[600] mt-[8px]">Case Updates</p>
          <p className="text-[16px] font-[400]">
            Check your case updates list.
          </p>
        </div>
        <div>
          <AddCaseDashboard casesData={caseData} />
        </div>
      </div>
      <div>
        {data ? (
          <DashboardCaseTable casesData={data} />
        ) : (
          <div>
            <DashboardSkeleton></DashboardSkeleton>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseUpdate;
