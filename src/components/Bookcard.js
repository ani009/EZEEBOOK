import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookCard = ({ name, author, price, image }) => {
  return (
   <div className="card">
        <div className="card-body ">
          <div className="Book_image">
            <img className="img-fluid h-100" src={image} alt={`${name} cover`} />
          </div>
          <div className="Book_content">
            <span className='heading'  style={{color:"#65B741"}}>{name}</span>
            <br/>
            <span className='author'>Author: {author}</span>
            <br/>
            <span className='price'>Price: ${price}</span>
          </div>
        </div>
    </div>
  );
};

export default BookCard;

