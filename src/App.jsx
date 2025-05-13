import './App.css'
import Footer from './Pages/Footer/Footer'
import ForthSection from './Pages/Forth/ForthSection'
import Home from './Pages/Home/Home'
import Images from './Pages/ImageSection/Images'
import Join from './Pages/Join/Join'
import LastSection from './Pages/LastSection/LastSection'
import Navbar from './Pages/Navbar/Navbar'
import SecondSection from './Pages/Second/SecondSection'
import StickySection from './Pages/StickySection/StickySection'
import Video from './Pages/Third/Video'
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SecondSection />
      <Video />
      <ForthSection />
      <Images />
      <StickySection />
      <Join />
      <LastSection />
      <Footer />
    </>
  )
}

export default App

