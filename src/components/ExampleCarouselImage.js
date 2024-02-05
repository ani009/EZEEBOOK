// import img1 from '../images/carausel/carausel1.jpg';
import React from "react";
const ExampleCarouselImage=({text,image})=>{
    return(<>
        <div className="carousel">
        <img src={image} alt='required'/>
        <div  style={{color:"#65B741"}}>{text}</div>
        </div>
    </>);
    };
export default ExampleCarouselImage;