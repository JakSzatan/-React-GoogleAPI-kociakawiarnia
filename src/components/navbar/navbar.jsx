import React from "react"


export default class Navbar extends React.Component{
  

      render(){
      return(   
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a href="#" className="nav-link effect-one">Home</a>
            </li>
            <li className="nav-item ">
            <a href="#Koty" className="nav-link effect-one">Nasze Koty</a>
            </li>
            <li className="nav-item ">
            <a href="#Menu" className="nav-link effect-one">Menu</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
      );
      }
      
  
  }