import Link from "next/link";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const SettingsLink = () => {
  return (
    <div className="flex flex-col">
      <Link
        className="w-[363px] h-[92px] text-[#6B0F99] text-[18px] font-[500] bg-[#E1ABFF] p-[32px] border-2"
        href={""}
      >
        <PermIdentityOutlinedIcon /> Personal Details
      </Link>
      <Link
        className="w-[363px] h-[92px] text-black text-[18px] font-[500] bg-[#D1D1D1] p-[32px] border-2"
        href={"/person"}
      >
        <ShieldOutlinedIcon /> Security
      </Link>
      <Link
        className="w-[363px] h-[92px] text-black text-[18px] font-[500] bg-[#D1D1D1] p-[32px] border-2"
        href={""}
      >
        <MapOutlinedIcon /> Address
      </Link>
      <Link
        className="w-[363px] h-[92px] text-black text-[18px] font-[500] bg-[#D1D1D1] p-[32px] border-2"
        href={""}
      >
        <ContactSupportOutlinedIcon /> Support
      </Link>
    </div>
  );
};
export default SettingsLink;
