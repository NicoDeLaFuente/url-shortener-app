'use client'
import Image from "next/image"
import Link from "next/link"

export default function SocialIcon({image,href}) {
    return  <Link href={href}>
    <Image
            className="cursor-pointer"
            src={image}
            width={20}
            height={20}
            alt="social Icon"
            />
    </Link>
}