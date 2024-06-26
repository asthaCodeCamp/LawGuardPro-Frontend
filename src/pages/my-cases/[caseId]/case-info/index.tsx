import CaseDetails from "@/components/CaseInfo/CaseDetails";
import CaseInfoHeader from "@/components/CaseInfo/CaseInfoHeaders";
import CircularIndeterminate from "@/components/Spinner/Spinner";
import CaseLayout from "@/components/layout/CaseLayout";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
import { useGetSingleCase } from "@/modules/SingleCase/SingleCase.hooks";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";

const CaseInfo = () => {
  const router = useRouter();
  const { data } = useGetSingleCase(router.query?.caseId as string);
  const [cases, setCases] = useState(data);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/login");
    }
  }, [session]);
  return (
    <div>
      <ProtectedLayout>
        <div className="w-full">
          <div>
            {data ? (
              <CaseInfoHeader
                caseName={cases?.data?.caseName}
                caseNumber={cases?.data?.caseNumber}
                lastUpdated={cases?.data?.lastUpdated}
                status={cases?.data?.status}
              />
            ) : (
              <CaseInfoHeader
                caseName="Murder"
                caseNumber="#00032"
                lastUpdated="20/06/2024"
                status="Working"
              />
            )}
          </div>
          <div className="w-full">
            <CaseLayout>
              {data ? (
                <CaseDetails
                  description={data?.data?.description}
                  totalQuoted={data?.data?.totalQuoted}
                  totalPaid={data?.data?.totalPaid}
                />
              ) : (
                <div className="mx-72 my-64">
                  <CircularIndeterminate />
                </div>
              )}
            </CaseLayout>
          </div>
        </div>
      </ProtectedLayout>
    </div>
  );
};

export default CaseInfo;
