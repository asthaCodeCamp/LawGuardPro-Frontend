import Link from "next/link";
import SettingsLink from "../Settings/SettingsLink";
import PersonalDetails from "../Settings/PersonalDetails";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="">
        <SettingsLink />
        {/* <PersonalDetails/>      */}
      </div>
      {children}
    </div>
  );
}
