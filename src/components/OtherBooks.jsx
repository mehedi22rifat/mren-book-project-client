
import { useEffect, useState } from 'react';
import OtherBookCard from './OtherBookCard';

const OtherBooks = () => {
  const [otherBooks,setOtherBooks] = useState([]);
    useEffect(() =>{
      fetch('http://localhost:5000/all-books')
      .then(res => res.json())
      .then(data => setOtherBooks(data.slice(6,14)))
    },[])

    // console.log(OtherBooks)
    return (
     <div>
      <OtherBookCard otherBooks={otherBooks} headline={'Other Books Here'}></OtherBookCard>
     </div>
      );
};

export default OtherBooks;