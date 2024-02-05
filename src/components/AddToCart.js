import React, { useState } from "react";

const AddToCart = ({ data, setCart }) => {
  const [text, setText] = useState("Add To Cart");

  const addToCartHandler = () => {
    if (text !== "Item added") {
      setCart((prevCart) => [...prevCart, data]);
      setText("Item added");
    }
  };

  return (
    <div className="add-to-cart">
      <button type="button" className="add-to-cart-btn" onClick={addToCartHandler}>
        {text}
      </button>
    </div>
  );
};

export default AddToCart;
