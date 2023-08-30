import React from 'react'
import './App.css';
import './Navbar';
import './Navbar';
import './Intro';
import Navbar from './Navbar';
import Intro from './Intro';
import About1 from './About1';

import Footer1 from './Footer1';
import Services from './Services';
import Myservice from './Myservice';
import Ab from './Ab';

const App = () => {
  return (
    <div className="App">

<Navbar/>
<Intro/>
<About1/>

{/*<Footer1/>*/}
<Myservice/>
<Footer1/>

    </div>
  )
}

export default App