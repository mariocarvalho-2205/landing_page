import Header from "./components/Header/index";
import Section from './components/Section'
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo'
import SectionFour from './components/SectionFour';
import SectionFive from "./components/SectionFive";
import './index.css'
import SectionSix from './components/SectionSix';

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
      </div>
    </>
  );
}

export default App;
