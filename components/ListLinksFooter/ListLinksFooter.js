import Link from "next/link"
import LinksFooter from "../LinksFooter/LinksFooter"
export default function ListLinksFooter({title}) {
    return  <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:items-start sm:gap-10">
                <div className="flex flex-col items-center justify-center gap-3 sm:gap-6">
                    <h4 className="font-bold">Features</h4>
                    <ul className="flex flex-col items-center justify-center text-sm gap-2">
                        <li>
                            <LinksFooter href="#" name="Link Shortening"/>
                        </li>
                        <li>
                            <LinksFooter href="#" name="Branded Links"/>
                        </li>
                        <li>
                            <LinksFooter href="#" name="Analytics"/>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 sm:gap-6">
                    <h4 className="font-bold">Resources</h4>
                    <ul className="flex flex-col items-center justify-center text-sm gap-2">
                        <li>
                            <LinksFooter href="#" name="Blog"/>
                        </li>
                        <li>
                            <LinksFooter href="#" name="Developers"/>
                        </li>
                        <li>
                            <LinksFooter href="#" name="Support"/>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 sm:gap-6">
                    <h4 className="font-bold">Company</h4>
                    <ul className="flex flex-col items-center justify-center text-sm gap-2">
                        <li>
                            <LinksFooter href="#" name="About"/>
                        </li>
                        <li>
                            <LinksFooter href="#" name="Out Team"/>
                        </li>
                        <li>
                            <LinksFooter href="#" name="Careers"/>
                        </li>
                        <li>
                            <LinksFooter href="#" name="Contact"/>
                        </li>
                    </ul>
                </div>

            </div>
}