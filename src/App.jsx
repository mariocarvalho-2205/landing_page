import Header from "./components/Header/index";
import Section from './components/Section'
import SectionFour from './components/SectionFour';
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo'
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
      </div>
    </>
  );
}

export default App;
