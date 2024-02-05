import { Carousel } from 'react-bootstrap';
import React from "react";
import ExampleCarouselImage from'./components/ExampleCarouselImage';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './images/carausel/carausel1.jpg';
import img2 from './images/carausel/carausel2.jpg';
import img3 from './images/carausel/carausel3.jpg';
function UncontrolledExample(){
  return (
    <Container>
    <div className="mt-4">
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="NOVELS" image={img1}/>
        <Carousel.Caption>
          <h2  style={{color:"#65B741"}} >NOVELS</h2>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="AUTOBIOGRAPHY" image={img2}/>
        <Carousel.Caption>
          {/* <h2 style={{color:'black'}} >AUTOBIOGRAPHY</h2> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="MANGAS" image={img3} />
        <Carousel.Caption>
          <h2  style={{color:"#65B741"}}>MANGAS</h2>
           
        </Carousel.Caption> 
      </Carousel.Item>
    </Carousel>
    </div>
    </Container>
  );
};

export default UncontrolledExample;
