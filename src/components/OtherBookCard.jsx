

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
const OtherBookCard = ({otherBooks,headline}) => {
    console.log(otherBooks)
    return (
        <div className='pb-12'>
         <h1 className='text-5xl text-center font-bold my-14'>{headline}</h1>
         <div>
         <Swiper
         slidesPerView={1}
         spaceBetween={10}
         pagination={{
           clickable: true,
         }}
         breakpoints={{
           640: {
             slidesPerView: 2,
             spaceBetween: 20,
           },
           768: {
             slidesPerView: 3,
             spaceBetween: 30,
           },
           1024: {
             slidesPerView: 4,
             spaceBetween: 40,
           },
         }}
         modules={[Pagination]}
         className="mySwiper"
       >
         <div className='pb-8 card bg-bash-100 shadow-lg'>
         {
                 otherBooks.map((book)=><SwiperSlide className='bg-bash-100 card shadow-lg' key={book._id}>
                   <Link to={`/book/${book._id}`}>
                   <div className='p-6 bg-slate-200 rounded-md relative'>
                     <img src={book.imageURL} alt="" />
                     <div className='flex justify-between items-center'>
                   <div>
                    <h1 className='font-bold'>{book.bookTitle}</h1>
                    <h1>{book.authorName}</h1>
                   </div>
                    <h1 className='font-bold text-blue-600'>$10.00</h1>
                   </div>
                   <AiOutlineShoppingCart className='text-2xl bg-blue-500 text-white p-1 rounded-md absolute -mt-[382px] ml-48 font-extrabold' />
                   </div>
                   </Link>
                 </SwiperSlide>)
             }
         </div>
       </Swiper>
        
         </div>
        </div>
       );
};

export default OtherBookCard;