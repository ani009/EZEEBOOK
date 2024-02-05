import React from "react";
import Books from "../utils/api";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import BookCard from "./Bookcard";
const filterdata = (searchtxt, allbooks) => {
  const data = allbooks.filter((book) => {
    return book.name && book.name.toLowerCase().includes(searchtxt.toLowerCase());
  });

  return data;
}


const Body = () => {
  const [visibleCards, setVisibleCards] = useState(9);
  const [allbooks,filterbooks]=useState(Books);
  const[searchtxt,setsearchtxt]=useState("");
  const[errormsg,setErrorMessage]=useState("");
  const handleShowMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 9);
  };
  const searchData = (searchtxt, Books) => {
    if (searchtxt !== "") {
      const Data = filterdata(searchtxt, Books);
      console.log(Data);
      filterbooks(Data);
      setErrorMessage("");
      if (Data?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchtxt}"`
        );
      }
    } else {
      setErrorMessage("");
      filterbooks(Books);
    }
  };
  return (
    <Container>
      <div className="search_bar text-center mt-4">
        {/* <h1>{searchtxt}</h1> */}
        <input type="text" value={searchtxt} placeholder="Enter Book Name" onChange={(event)=>{
          setsearchtxt(event.target.value)
        }}></input>
        <button className="search-btn" type="button" 
        onClick={()=>{
          searchData(searchtxt, Books);
          // filterbooks(data);
        }}>Search</button>
      </div>
      <div className="row row-cols-2 row-cols-md-3 d-flex justify-content-around">
        {allbooks.slice(0, visibleCards).map((book) => (
          <div key={book.id} className="mt-4">
            <Link className="Card-link" to={"/" + book.id} key={book.id}>
              <BookCard name={book.name} author={book.author} price={book.price} image={book.image} />
            </Link>
          </div>
        ))}
      </div>

      {/* {visibleCards < Books.length && (
        <button className="btn btn-primary mt-3" onClick={handleShowMore}>
          Show More
        </button>
      )} */}
    </Container>
  );
};
export default Body;
