import Link from "next/link";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import DescriptionIcon from '@mui/icons-material/Description';

const CaseInfoLink = () => {
  return (
    <div className="bg-[#D1D1D1] h-full">
      <div className="flex flex-col">
        <Link
          className="w-[363px] h-[92px] text-[#6B0F99] text-[18px] font-[500] bg-[#E1ABFF] p-[32px] border-b-[1px]"
          href={"/case-details/case-info"}
        >
          <InfoOutlinedIcon/> Case Info
        </Link>
        <Link
          className="w-[363px] h-[92px] text-black text-[18px] font-[500] bg-[#D1D1D1] p-[32px] border-b-[1px]"
          href={"/settings/security"}
        >
          <ChatIcon /> Messages
        </Link>
        <Link
          className="w-[363px] h-[92px] text-black text-[18px] font-[500] bg-[#D1D1D1] p-[32px] border-b-[1px]"
          href={"/settings/address"}
        >
          <AttachFileOutlinedIcon/> Attachments
        </Link>
        <Link
          className="w-[363px] h-[92px] text-black text-[18px] font-[500] bg-[#D1D1D1] p-[32px] border-b-[1px]"
          href={"/settings/support"}
        >
          <DescriptionIcon /> Quotes
        </Link>
      </div>
    </div>
  );
};
export default  CaseInfoLink;
