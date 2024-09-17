import { useEffect,useState } from "react";
import BookCard from "./BookCards/BookCard";
import AOS from "aos";
import "aos/dist/aos.css"; 



const BestSellerBook = () => {
    const [books,setBooks] = useState([])
    // console.log(books)

    // aos init
    useEffect(() =>{
        AOS.init()
    },[])

    useEffect(() =>{
        fetch('http://localhost:5000/all-books')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div data-aos="fade-up"
     data-aos-duration="3000"> 
          <BookCard books={books} headLine={'Best Seller Book'}></BookCard>
        </div>
    );
};

export default BestSellerBook;