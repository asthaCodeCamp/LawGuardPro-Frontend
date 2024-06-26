import { useRouter } from "next/router";
import Link from "next/link";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const SettingsLink = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="bg-[#D1D1D1] w-48 h-full min-h-[94vh]  ">
      <div className="flex flex-col h-full ">
        <Link
          className={`text-[16px] font-[500] border-b-[0.8px] p-4 text-center ${
            pathname === "/settings/personal-info"
              ? "text-[#6B0F99] bg-[#E1ABFF]"
              : "text-black bg-[#D1D1D1]"
          }`}
          href={"/settings/personal-info"}
        >
          <PermIdentityOutlinedIcon /> Personal Details
        </Link>
        <Link
          className={`text-[16px] font-[500] border-b-[0.8px] p-4 ${
            pathname === "/settings/security"
              ? "text-[#6B0F99] bg-[#E1ABFF]"
              : "text-black bg-[#D1D1D1]"
          }`}
          href={"/settings/security"}
        >
          <ShieldOutlinedIcon /> Security
        </Link>
        <Link
          className={`text-[16px] font-[500] border-b-[0.8px] p-4 ${
            pathname === "/settings/address"
              ? "text-[#6B0F99] bg-[#E1ABFF]"
              : "text-black bg-[#D1D1D1]"
          }`}
          href={"/settings/address"}
        >
          <MapOutlinedIcon /> Address
        </Link>
        <Link
          className={`text-[16px] font-[500] border-b-[0.8px] p-4 ${
            pathname === "/settings/support"
              ? "text-[#6B0F99] bg-[#E1ABFF]"
              : "text-black bg-[#D1D1D1]"
          }`}
          href={"/settings/support"}
        >
          <ContactSupportOutlinedIcon /> Support
        </Link>
      </div>
    </div>
  );
};

export default SettingsLink;
