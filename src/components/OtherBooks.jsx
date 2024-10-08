
import { useEffect, useState } from 'react';
import OtherBookCard from './OtherBookCard';

const OtherBooks = () => {
  const [otherBooks,setOtherBooks] = useState([]);
    useEffect(() =>{
      fetch('https://mren-server.vercel.app/all-books')
      .then(res => res.json())
      .then(data => setOtherBooks(data.slice(6,14)))
    },[])

    // console.log(OtherBooks)
    return (
     <div data-aos="fade-up"
     data-aos-duration="3000">
      <OtherBookCard otherBooks={otherBooks} headline={'Other Books Here'}></OtherBookCard>
     </div>
      );
};

export default OtherBooks;