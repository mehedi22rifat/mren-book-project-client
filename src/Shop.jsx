import { useEffect, useState } from "react";
import ShopCard from "./ShopCard";


const Shop = () => {
    const [books,setBooks] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/all-books')
        .then(res => res.json())
        .then(data =>setBooks(data))
      },[])

    //   console.log(books)
    return (
        <div className=" p-5 pt-10">
            <h1 className="text-5xl font-bold text-center py-12">All Books Are Here</h1>
           <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
           {
              books.map(book => <ShopCard key={book._id} book={book}></ShopCard>)
            }
           </div>
        </div>
    );
};

export default Shop;