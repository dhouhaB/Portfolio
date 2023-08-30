import React from 'react'
import "./Myservice.css";

const Myservice = () => {
  return (
    <div className="service">
    <div className="title">
        <h2>Projets</h2>
    </div>


    <div className="box">
    <div className="card">
    <i className="fas fa-bars"></i>
            <h5>book app</h5>

            <div className="pra">

            <p>une application pour gerer les livre  j'ai utilisé React pour la partie front end  nos js backend et pour la gestion de 
                    base j'ai utilisé Mongo DB 
                </p>

                <p style={{ textAlign: 'center' }}>
                    <a class="button" href="#">Read More</a>
                </p>

               
            </div>{/*hethi mte3 el para*/ }








            </div>{/*hethi mte3 el card*/ }



            <div class="card">
            <i className="far fa-user"></i>
            <h5>Todo list </h5>
            <div className="pra">
                <p>une application pour la gestion des taches en utilisant React js </p>
                <p style={{ textAlign: 'center' }}>
                    <a class="button" href="#">Read More</a>
                </p>
            </div>
        </div>

        <div className="card">
            <i className="far fa-bell"></i>
            <h5>Recepe app  </h5>
            <div class="pra">
                <p>une application pour la gestion des recettes  en utilisant React js </p>
                <p style={{ textAlign: 'center' }}>
                    <a class="button" href="#">Read More</a>
                </p>
            </div>
        </div>

























































</div> {/* mte3 el bix  hethi*/ }
    </div>
  )
}

export default Myservice