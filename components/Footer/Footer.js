import Link from "next/link"
import ListLinksFooter from "../ListLinksFooter/ListLinksFooter"
import SocialMedia from "../SocialMedia/SocialMedia"
import LogoWhite from "../LogoWhite/LogoWhite"

export default function Footer () {
    return  <footer className="pt-10 bg-darkBlue text-white sm:flex sm:justify-center sm:items-center">
                <div className="flex flex-col gap-4 items-center justify-center sm:max-w-5xl sm: w-full sm:flex-row sm:justify-between sm:items-start sm:gap-5 sm:pb-10">
                    <LogoWhite/>
                    <div className=" flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
                        <ListLinksFooter/>
                        <SocialMedia/>
                    </div>
                    
                </div>
            </footer>
}