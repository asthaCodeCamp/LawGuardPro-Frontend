import Link from "next/link";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const SettingsLink = () => {
  return (
    <div className="bg-[#D1D1D1] h-full w-48 border-r-[0.8px]">
      <div className="flex flex-col">
        <Link
          className="text-[#6B0F99] text-[16px] font-[500] bg-[#E1ABFF] border-b-[0.8px] p-4  text-center"
          href={"/settings/personal-info"}
        >
          <PermIdentityOutlinedIcon /> Personal Details
        </Link>
        <Link
          className=" text-black text-[16px] font-[500] bg-[#D1D1D1]  border-b-[0.8px] p-4 "
          href={"/settings/security"}
        >
          <ShieldOutlinedIcon /> Security
        </Link>
        <Link
          className="text-black text-[16px] font-[500] bg-[#D1D1D1]   border-b-[0.8px] p-4 "
          href={"/settings/address"}
        >
          <MapOutlinedIcon /> Address
        </Link>
        <Link
          className="text-black text-[16px] font-[500] bg-[#D1D1D1]   border-b-[0.8px] p-4 "
          href={"/settings/support"}
        >
          <ContactSupportOutlinedIcon /> Support
        </Link>
      </div>
    </div>
  );
};
export default SettingsLink;
