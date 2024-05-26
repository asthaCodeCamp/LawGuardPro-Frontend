import Link from "next/link";
import SettingsLink from "../Settings/SettingsLink";
import PersonalDetails from "../Settings/PersonalDetails";




export default function SettingsLayout({
    children,
}:{
    children: React.ReactNode
}) {
    return (
        <div>
            <div className="flex">
                <SettingsLink/>
                <PersonalDetails/>     
            </div>
            {children}
        </div>
    )
}
