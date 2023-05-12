import Image from 'next/image'
import Link from 'next/link'

import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'

export default function Home() {
  return (
    <html>
      <body>
        <Header/>
        <Hero/>
      </body>
    </html>
  )
}
