import { useRouter } from "next/router";
import Link from "next/link";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import ChatIcon from "@mui/icons-material/Chat";
import DescriptionIcon from "@mui/icons-material/Description";

const CaseInfoLink = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="bg-[#D1D1D1] w-48 h-full border pb-96">
      <div className="flex flex-col">
        <Link
          href={`/my-cases/${router?.query.caseId}/case-info`}
          className={` text-[16px] p-4 font-[500] border-b-[1px] ${
            pathname === `/my-cases/[caseId]/case-info`
              ? "text-[#6B0F99] text-[16px] font-[500] bg-[#E1ABFF]"
              : "bg-[#D1D1D1]"
          }`}
        >
          <InfoOutlinedIcon /> Case Info
        </Link>
        <Link
          href={`/my-cases/${router?.query.caseId}/messages`}
          className={` text-[16px] p-4 font-[500] border-b-[1px] ${
            pathname === "/my-cases/[caseId]/messages"
              ? "text-[#6B0F99] text-[16px] font-[500] bg-[#E1ABFF]"
              : "bg-[#D1D1D1]"
          }`}
        >
          <ChatIcon /> Messages
        </Link>
        <Link
          href={`/my-cases/${router?.query.caseId}/attachments`}
          className={` text-[16px] p-4 font-[500] border-b-[1px] ${
            pathname === "/my-cases/[caseId]/attachments"
              ? "text-[#6B0F99] text-[16px] font-[500] bg-[#E1ABFF]"
              : "bg-[#D1D1D1]"
          }`}
        >
          <AttachFileOutlinedIcon /> Attachments
        </Link>
        <Link
          href={`/my-cases/${router?.query.caseId}/quotes`}
          className={` text-[16px] p-4 font-[500] border-b-[1px] ${
            pathname === "/my-cases/[caseId]/quotes"
              ? "text-[#6B0F99] text-[16px] font-[500] bg-[#E1ABFF]"
              : "bg-[#D1D1D1]"
          }`}
        >
          <DescriptionIcon /> Quotes
        </Link>
      </div>
    </div>
  );
};

export default CaseInfoLink;
