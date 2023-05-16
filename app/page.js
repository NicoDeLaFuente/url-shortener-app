import Image from 'next/image'
import Link from 'next/link'

import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import AdvanceStatistics from '@/components/AdvanceStatistics/AdvanceStatistics'
import BoostLinks from '@/components/BoostLinks/BoostLinks'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <html>
      <body>
        <Header/>
        <Hero/>
        <AdvanceStatistics/>
        <BoostLinks/>
        <Footer />
      </body>
    </html>
  )
}
