 import About from './About';  
 import Home from './Home'; 
 import Serive from './Service';
import './App.css';
import Navbar from './Navbar';
import Intro from './Intro';
import About1 from './About1';
import Service from './Service';

function App() {
  return (
    <div className="App">  
<Navbar/>
<Intro/>
          <About1/>
         <Service/>
    </div>
  );
}

export default App;
