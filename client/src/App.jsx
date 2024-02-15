import Header from "./components/Header/index";
import Section from './components/Section'
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo'
import SectionFour from './components/SectionFour';
import SectionFive from "./components/SectionFive";
import SectionSix from './components/SectionSix';
import Footer from "./components/Footer";
import './index.css'

function App() {
  return (
    <>
      <div className="global">
        <Header />
        <Section />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <Footer />
      </div>
    </>
  );
}

export default App;
