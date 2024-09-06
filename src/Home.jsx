import Banner from "./components/Banner/Banner";
import BestSellerBook from "./components/BestSellerBook";
import DawnloadApp from "./components/DawnloadApp";
import FavoriteBook from "./components/FavoriteBook";
import NationalBook from "./components/NationalBook.JSX";
import OtherBooks from "./components/OtherBooks";
import TestimonialCard from "./components/Testimonials/TestimonialCard";
import Testimonials from "./components/Testimonials/Testimonials";




const Home = () => {
    return (
        <div>
           <div className="">
            <Banner></Banner>
            <div className="w-[90%] mx-auto">
            <BestSellerBook></BestSellerBook>
            <FavoriteBook></FavoriteBook>
            <NationalBook></NationalBook>
            <OtherBooks></OtherBooks>
            <Testimonials></Testimonials>
              {/* <DawnloadApp></DawnloadApp> */}
            </div>
           </div>
        </div>
    );
};

export default Home;