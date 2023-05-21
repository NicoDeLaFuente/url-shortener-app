'use client'
import Link from "next/link"
import Image from "next/image"
import LogoImg from "../../images/logo.svg"
export default function Logo () {
    return <Link href="#">
    <Image
        src={LogoImg }
        width={100}
        height={100}
        alt="Logo"
    >
    </Image>
    </Link>
}
