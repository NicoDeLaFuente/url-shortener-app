'use client'

import Link from "next/link"

export default function LinksFooter({name, href}){
    return <Link href={href} className="hover:text-cyan">{name}</Link>
}