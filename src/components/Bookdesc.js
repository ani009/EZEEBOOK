import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import Books from "../utils/api";
import { Container } from "react-bootstrap";
import AddToCart from "./AddToCart";

const Bookdesc = ({book,setCart}) => {
  return (
    <Container>
    <div className=" desciption row mt-4" style={{border:'2px solid black'}}>
      <div className=" description-image d-flex justify-content-center align-items-center col-md-6">
      <div className="image-container text-center" style={{border:'2px solid black'}}>
          <img src={book.image} alt="required" className="img-fluid" />
        </div>
        {/* <div className="image-price" style={{border:'2px solid black'}}>
          {book.price}
        </div> */}
      </div>
      <div className="description-info col-md-6">
        <div className="image-description">
          <span className="image-desc-name">Name:-<span className="m-4" style={{color:"black"}}>{book.name}</span></span><br/>
          <span className="image-desc-name">Author:-  <span className="m-4" style={{color:"black"}}>{book.author}</span></span><br/>
          <span className="image-desc-name">Price:-  <span className="m-4" style={{color:"black"}}>${book.price}</span></span><br/><br/>
          <h2 style={
            {color: "#65B741",
          borderBottom:"2px solid #65B741",
        display:"inline-block"}
          }>Description</h2>
          <p>
          {book.description}
          </p>
          </div>
          <div className="image-cart">
          <AddToCart data={book} setCart={setCart} />
          </div>

      </div>
    </div>
    </Container>
  );
}

const Bookfind = ({setCart}) => {
  const { id } = useParams();
  const selectedBook = Books.find(book => book.id === id);
  console.log(selectedBook);
  return selectedBook ? <Bookdesc book={selectedBook} setCart={setCart}/> : <div>Book not found</div>;
}

export default Bookfind;
