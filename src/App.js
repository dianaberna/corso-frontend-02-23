import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Separator from './components/Separator/Separator';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      {/* <Project></Project> */}
      <Footer></Footer>

    </div>
  );
}

export default App;
