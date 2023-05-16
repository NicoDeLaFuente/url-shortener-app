import Link from "next/link"
export default function LinksFooter({title}) {
    return  <div>
                <div>
                    <h4>Features</h4>
                    <div>
                        <Link href="#">Link Shortening</Link>
                        <Link href="#">Branded Links</Link>
                        <Link href="#">Analytics</Link>
                    </div>
                </div>

                <div>
                    <h4>Resources</h4>
                    <div>
                        <Link href="#">Blog</Link>
                        <Link href="#">Developers</Link>
                        <Link href="#">Support</Link>
                    </div>
                </div>

                <div>
                    <h4>Company</h4>
                    <div>
                        <Link href="#">About</Link>
                        <Link href="#">Our Team</Link>
                        <Link href="#">Careers</Link>
                        <Link href="#">Contact</Link>
                    </div>
                </div>

            </div>
}