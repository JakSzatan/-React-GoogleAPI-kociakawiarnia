import React from "react"


export default class Carousel extends React.Component{
  
  constructor(props) {
    super(props);

    this.state = {
      dat: null,
      Kotki:null,
    };
  }

  FormatLinks(data){
    for(var i = 0; i < data.length; i++){
      data[i].img=data[i].img.split("d/")
      data[i].img=data[i].img[1].split("/")[0];
    }
    let Kotki2=[]
    {data.map((item,index)=>{

      Kotki2.push(
      <div key={index} className={index===0?"active carousel-item ":"carousel-item"} data-bs-interval="20000">
      <img src={"https://drive.google.com/uc?export=view&id="+item.img} className="d-block w-100 carouselImg scaler" alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{background:"#acacac82"}}>
    <h3 className=" text-white">{item.imie}</h3>
    <p>{item.opis}</p>
    </div>
     </div>)

    })}
    this.setState({dat:data});
    this.setState({Kotki:Kotki2});
  }

  async componentDidMount() {
  
   const rensponse= await fetch('https://opensheet.vercel.app/1XzBuv_2pVXV0AN7ZnP53f76UuLc0_FipliwPQYfVLFA/SH');
   const data = await rensponse.json();         
   await this.setState({dat: JSON.parse(JSON.stringify(data))});
   this.FormatLinks(this.state.dat)
}

      render(){


      return(
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner scaler">

        {this.state.Kotki}
  </div>
  <button class="carousel-control-prev btn btn-secondary" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next btn btn-secondary" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        );
      }
  }