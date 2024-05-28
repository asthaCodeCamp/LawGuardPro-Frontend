import Link from "next/link";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const CaseInfoLink = () => {
  return (
    <div className="bg-[#D1D1D1] h-full">
      <div className="flex flex-col">
        <Link
          className="w-[363px] h-[92px] text-[#6B0F99] text-[18px] font-[500] bg-[#E1ABFF] p-[32px] border-b-[1px]"
          href={"/case-details/case-info"}
        >
          <PermIdentityOutlinedIcon /> Case Info
        </Link>
        <Link
          className="w-[363px] h-[92px] text-black text-[18px] font-[500] bg-[#D1D1D1] p-[32px] border-b-[1px]"
          href={"/settings/security"}
        >
          <ShieldOutlinedIcon /> Security
        </Link>
        <Link
          className="w-[363px] h-[92px] text-black text-[18px] font-[500] bg-[#D1D1D1] p-[32px] border-b-[1px]"
          href={"/settings/address"}
        >
          <MapOutlinedIcon /> Address
        </Link>
        <Link
          className="w-[363px] h-[92px] text-black text-[18px] font-[500] bg-[#D1D1D1] p-[32px] border-b-[1px]"
          href={"/settings/support"}
        >
          <ContactSupportOutlinedIcon /> Support
        </Link>
      </div>
    </div>
  );
};
export default  CaseInfoLink;
