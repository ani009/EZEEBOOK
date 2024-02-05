import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Cartlist = ({ Data }) => {
  const [quantities, setQuantities] = useState(Array(Data.length).fill(1));

  const increase = (index) => {
    console.log(index);
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decrease = (index) => {
    if (quantities[index] > 1) {
      const newQuantities = [...quantities];
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  return (
    <Container>
      <h2>Shopping Cart</h2>
      <div className='container d-flex flex-column'>
        {Data.map((item, index) => (
          <div
            className='cart-card mb-4 d-flex flex-direction-column'
            key={index}
            style={{ border: '2px solid black' }}
          >
            
            <div className='cart-card-image' style={{ borderRight: '2px solid black' }}>
              <img src={item.image} alt='required' />
            </div>
            <div className='cart-card-description' style={{ borderRight: '2px solid black' }}>
              <h3>{item.name}</h3>
              <h4>{item.price}</h4>
            </div>
            <div className='cart-counter'>
              <div className='cart-button'>
                <button style={{backgroundColor:"#65B741"}} onClick={() => increase(index)}>+</button>
              </div>
              <div className='m-3' style={{fontSize:"20px"}}>{quantities[index]}</div>
              <div className='cart-button'>
                <button style={{backgroundColor:"#65B741"}} onClick={() => decrease(index)}>-</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Cartlist;

