import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InfoCards from "./components/InfoCards/InfoCards"
import Card from "./components/card/Card"
import Extra from "./components/extra/Extra"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Hubert from './components/hubert/Hubert';
import Comfort from './components/comfort/Comfort';
import Info from './components/info/Info';
import Admin from './components/admin/Admin';
import Locate from './components/locate/Locate';
import Contact from './components/contact/Contact';
import ContactInfo from './components/contactInfo/ContactInfo';


function App() {
  return (
    <>
    <Nav/>
    <Header/>
    <Extra/>
    <InfoCards/>
    <Card/>
    <Hubert/>
    <Comfort/>
    <Info/>
    <Admin/>
    <Locate/>
    <Contact/>
    <ContactInfo/>
    </>
  )
}

export default App
