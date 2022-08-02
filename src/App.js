import './App.css';
import Experience from './Components/Experience/Experience';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Protfolio from './Components/Protfolio/Protfolio';
import Testimonial from './Components/Testimonial/Testimonial';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { useContext } from 'react';
import { themeContest } from './Contest';


function App() {

  const theme = useContext(themeContest);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background: darkMode? 'black' : '',
        color: darkMode? 'white' : ''
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Work />
      <Protfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
