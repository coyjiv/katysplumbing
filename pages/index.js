import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AboutUs from '../src/components/AboutUs'
import { Navigation } from '../src/components/Navigation'
import Services from '../src/components/Services'
import Reviews from '../src/components/Reviews'
// import GalleryComponent from '../src/components/GalleryComponent';
import { ApplyForm } from '../src/components/ApplyForm'
import ContactUs from '../src/components/ContactUs'
import Footer from '../src/components/Footer'
import { ScrollToTop } from '../src/components/buttons/ScrollToTop'
import { HeroBanner } from '../src/components/HeroBanner'
import { useHasHydrated } from '@/hooks/useHydrated'

export default function Home() {
  const isHydrated = useHasHydrated()
  return (
    <>
      <Head>
        <title>Katys Plumbing Service</title>
        <meta
          name='description'
          content='Katys Plumbing Service is the best plumbing service in whole Houston. With an affordable price you could order our service'
        />
        <link rel='icon' href='/img/logo-favicon.webp' />
        <meta property='og:title' content='Katys Plumbing Service' />
        <meta property='og:site_name' content='Katys Plumbing Service' />
        <meta property='og:url' content='https://katysplumbingservice.com/' />
        <meta
          property='og:description'
          content='Katys Plumbing Service is the best plumbing service in whole Houston. With an affordable price you could order our service'
        />
        <meta property='og:type' content='article' />
        <meta
          property='og:image'
          content='https://katysplumbingservice.com/img/logo.webp'
        />
      </Head>

      {isHydrated && (
        <>
          <ScrollToTop />
          <Navigation />
          <HeroBanner />
          <AboutUs />
          <Services />
          <Reviews />
          {/* <GalleryComponent /> */}
          <ApplyForm />
          <ContactUs />
          <Footer />
          <ToastContainer />
        </>
      )}
    </>
  )
}
