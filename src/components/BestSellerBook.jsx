import { useEffect,useState } from "react";
import BookCard from "./BookCards/BookCard";




const BestSellerBook = () => {
    const [books,setBooks] = useState([])
    console.log(books)

    useEffect(() =>{
        fetch('http://localhost:5000/all-books')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div> 
          <BookCard books={books} headLine={'Best Seller Book'}></BookCard>
        </div>
    );
};

export default BestSellerBook;