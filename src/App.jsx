
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/navbar/navbar";
import Carousel from "./components/carusel/carusel";
import "./customstyle.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const App = () =>{
  AOS.init({duration: 1000,once: true,});
    return(
        <Router>
        <div>
            
            {/* Baner */}

            <Navbar/>
  
            
            





        {/* <Switch>
          <Route path="/Ceny">
          <div className="container mt-5">
            <h2>Ceny</h2>
            Tutaj pojawi się cennik
              <hr/>
          </div>
          </Route>
          <Route path="/About">
          <div className="container mt-5">
            <h2>Info</h2>
             Info o studiu
            <hr/>
          </div>
          </Route>
          <Route path="/">
          <Carousel/>
          <div className="container mt-5">
            <h2>News</h2>
            Jakieś Newsy
              <hr/>
          </div>
          </Route>
        </Switch> */}
        <img src="https://drive.google.com/uc?export=view&id=1TB1YnmiVEk2RLgMtypdfJii8n-djQv6_"  className="img-fluid w-100" alt="Responsive image"/>
        <div className="container mt-5">
        
            <div data-aos="fade-up" className="mb-5">
              <h2>Kocia Kawiarnia</h2>
              <p>
              to miejsce dla miłośników kotów. Tutaj w kocim towarzystwie można spędzić czas na głaskaniu naszych rezydentów,
               przy kawie, herbacie lub pracując.
               Naszym głównym celem jest oddawanie kotów do domów adopcyjnych.
               </p>
               <p>
               Kocia kawiarnia działa pod opieką Fundacji Mruczący Terapeuta.
                Głównym zadaniem fundacji i wolontariuszy jest opieka nad bezdomnymi kotami, które potrzebują opieki oraz leczenia weterynaryjnego.
                 Gdy znaleziony kot przejdzie już całe leczenie tzn szczepienie, odrobaczenia, testy na FIV i FeLV będą negatywne, wtedy może trafić do kociej kawiarni gdzie będzie czekał na swój dom stały. Ludzie przychodząc tutaj mogą poznać kota przed adopcją, a także po prostu miło spędzić popołudniu i w towarzystwie mruczków wypić coś dobrego do picia.
                Wejście kosztuje 8 zł od osoby, jest to cegiełka charytatywna, która pomaga utrzymać to miejsce.
               </p>
                <hr id="Koty"/>
            </div>

            <div data-aos="fade-up"  className="mb-5">
              <Carousel/>
            </div>

            <hr />
            <div data-aos="fade-up" className="mb-5 d-flex">
            <div className="mr-5">
                <img data-aos="slide-right" style={{height :"200px"}} className="rounded" src="https://drive.google.com/uc?export=view&id=1IM08QDLPeRgt79LhkeqdMmcdSLk3N-K9"/>
                </div>
              <p>
              Fundatorką fundacji jest Pani Krywko, która na swoim koncie ma wiele osiągnięć związanych z opieką i tresurą nad kotami. 
              </p>
            </div>

              <hr />
            <div id="Menu" data-aos="fade-up" className="mb-5 d-flex flex-column justify-content-center">
            <h1 className=" text-secondary mx-auto">
                Można płacić kartą!
                </h1>
                
              <img className="rounded w-100" src="https://drive.google.com/uc?export=view&id=1AEwiulATaF0S69PmXjVZ0XLLiu2kK5y3"/>
            </div>

          </div>

            <div data-aos="fade" className="pt-2 pl-md-5 pl-sm-2 pl-1 pb-4 bg-secondary">
              
            <h2 className="pl-md-5 pl-sm-2 pl-1">Skontaktuj sie z nami</h2>
            <div className="pl-md-5 pl-sm-2 pl-1" style={{color:"#5a5a5a", fontSize:"20px"}}>   
              
                <div>
                <span><i  className="bi bi-geo-alt text-primary ml-1 fs-1"></i></span>
                Świętego Wojciecha 1
                10-102 Olsztyn
                <p><span ><i  className="bi bi-envelope ml-2 " style={{color:"#eee"}}> kociakawiarnia.okk@gmail.com</i></span></p>

              </div>   
                  <div style={{color:"#fccc63"}}>
                  <span><a href="https://www.facebook.com/KociaKawiarniaOlsztyn/"><i  className="bi bi-facebook ml-2 " style={{fontSize:"30px",color:"#516EE1"}}></i></a></span>
                  <span><a href="https://www.instagram.com/kocia.kawiarnia.olsztyn/" style={{fontSize:"30px"}}><i className="bi bi-instagram instagram ml-2 "></i></a></span>
                  <i className="bi bi-telephone ml-2 fs-2"></i> 607 404 044</div>

            </div>
            </div>
      </div>
    </Router>

      
        

    );
}

export default App;