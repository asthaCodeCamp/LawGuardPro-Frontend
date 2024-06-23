import SettingsLink from "../Settings/SettingsLink";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex border border-red-600">
      <div>
        <SettingsLink />
        {/* <PersonalDetails/>      */}
      </div>
      {children}
    </div>
  );
}
