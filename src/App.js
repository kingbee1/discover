import './App.css';
import Header from './components/Header';
import Section from './pages/Section';
import Details from './pages/Details';
import Carousel from './pages/Carousel';
import {Data} from './variables/Data'



function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <Details/>
      <Carousel slides={Data}/>
    </div>
  );
}

export default App;
