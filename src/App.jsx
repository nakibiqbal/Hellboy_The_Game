import { lazy, Suspense } from 'react'
import './App.css'
import Navbar from './Pages/Navbar/Navbar'
import SuspenseLoad from './SuspenseLoad'

// Lazy load all pages except Navbar
const Home = lazy(() => import('./Pages/Home/Home'))
const SecondSection = lazy(() => import('./Pages/Second/SecondSection'))
const Video = lazy(() => import('./Pages/Third/Video'))
const ForthSection = lazy(() => import('./Pages/Forth/ForthSection'))
const Images = lazy(() => import('./Pages/ImageSection/Images'))
const StickySection = lazy(() => import('./Pages/StickySection/StickySection'))
const Join = lazy(() => import('./Pages/Join/Join'))
const LastSection = lazy(() => import('./Pages/LastSection/LastSection'))
const Footer = lazy(() => import('./Pages/Footer/Footer'))

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<SuspenseLoad />}>
        <Home />
      </Suspense>
      <Suspense fallback={<SuspenseLoad />}>
        <SecondSection />
      </Suspense>
      <Suspense fallback={<SuspenseLoad />}>
        <Video />
      </Suspense>
      <Suspense fallback={<SuspenseLoad />}>
        <ForthSection />
      </Suspense>
      <Suspense fallback={<SuspenseLoad />}>
        <Images />
      </Suspense>
      <Suspense fallback={<SuspenseLoad />}>
        <StickySection />
      </Suspense>
      <Suspense fallback={<SuspenseLoad />}>
        <Join />
      </Suspense>
      <Suspense fallback={<SuspenseLoad />}>
        <LastSection />
      </Suspense>
      <Suspense fallback={<SuspenseLoad />}>
        <Footer />
      </Suspense>
    </>
  )
}

export default App