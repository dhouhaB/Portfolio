import React from 'react';
import './Intro.css';
import Github from "./img/github.png";
import LinkedIn from "./img/linkedin.png";
import Instagram from "./img/instagram.png";

import myImage from './img/jau1.png';
const Intro = () => {
  return (
    <div className='Intro'>

<div className='i-left'>
<div className='i-name'>

<span>Hi !I'm </span>
<span>Dhouha Bessalah</span>


<span>Web Developer with small esperience </span>

</div>
<button className='button i-button'>Hire Me </button>
<div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>


</div>
{/*
<div className='i-right'>


<img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />




</div>

*/ }

<div className='home-img'>

<div className='glowing-circle'>
<span></span>
<span></span>

<div className='image'>

<img src={myImage} alt="Description de l'image" />


</div>



</div>





</div>








    </div>
  )
}

export default Intro