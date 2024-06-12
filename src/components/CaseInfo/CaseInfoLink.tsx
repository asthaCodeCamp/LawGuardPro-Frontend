import Link from "next/link";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import DescriptionIcon from '@mui/icons-material/Description';

const CaseInfoLink = () => {
  return (
    <div className="bg-[#D1D1D1] w-48 h-full ">
      <div className="flex flex-col">
        <Link
          className=" text-[#6B0F99] text-[16px] font-[500] bg-[#E1ABFF] p-4 border-b-[1px]"
          href={"/case-details/case-info"}
        >
          <InfoOutlinedIcon/> Case Info
        </Link>
        <Link
          className=" text-black text-[16px] p-4 font-[500] bg-[#D1D1D1] border-b-[1px]"
          href={"/case-details/messages"}
        >
          <ChatIcon /> Messages
        </Link>
        <Link
          className=" text-black text-[16px] p-4  font-[500] bg-[#D1D1D1]  border-b-[1px]"
          href={"/case-details/attachments"}
        >
          <AttachFileOutlinedIcon/> Attachments
        </Link>
        <Link
          className=" text-black text-[16px] p-4  font-[500] bg-[#D1D1D1] border-b-[1px]"
          href={"/case-details/quotes"}
        >
          <DescriptionIcon /> Quotes
        </Link>
      </div>
    </div>
  );
};
export default  CaseInfoLink;
