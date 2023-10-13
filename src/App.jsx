import "bootstrap/dist/js/bootstrap.min.js";
import './App.css'
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import ServicesSection from "./components/ServicesSection/ServicesSection";
import CasesSection from "./components/CasesSection/CasesSection";
import Divider from "./components/Divider";
import IndustriesSection from "./components/IndustriesSection/IndustriesSection";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Divider height={84} />
        <ServicesSection />
        <Divider height={50} />
        <CasesSection />
        <Divider height={50} />
        <IndustriesSection />
        <Divider height={80}/>
      </main>
      <Footer />
    </>
  )
}

export default App
