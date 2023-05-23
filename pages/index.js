import BodyPage from '@/components/BodyPage'
import DownloadSection from '@/components/DownloadSection'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import InfoSection from '@/components/InfoSection'
import NavMenu from '@/components/NavMenu'
import Title from '@/components/Title'

export default function Home() {
  return (
    <main className='bg-white text-slate-800 dark:bg-slate-800 dark:text-white'>
      {/* menu principal */}
      <NavMenu/>

      {/* Hero */}
      <Hero/>

      {/* title */}
      <Title/>

      {/* body page */}
      <BodyPage/>

      {/* info section */}
      <InfoSection/>

      {/* DownloadSection */}
      <DownloadSection/>

      {/* Footer */}
      <Footer/>

    </main>
  )
}
