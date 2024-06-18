import CaseInfoLink from "../CaseInfo/CaseInfoLink";

export default function CaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="">
        <CaseInfoLink />
      </div>
      {children}
    </div>
  );
}
