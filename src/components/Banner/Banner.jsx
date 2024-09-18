import Slider from "./Slider";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

const Banner = () => {
  useEffect(() =>{
    AOS.init()
  },[])
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000" className="lg:h-[500px] md:h-auto h-auto bg-blue-200 w-full">
            <div className="py-28 lg:gap-16 gap-9 flex flex-col lg:flex-row md:flex-row lg:px-10 md:px-5 px-5">
            <div className="flex-1">
               <h1 className=" text-3xl lg:text-5xl md:text-5xl font-semibold">Bye and seell your books</h1>
               <h1 className="text-blue-600 font-bold text-3xl lg:text-4xl xl:text-4x mt-1">for the best prices</h1>
               <p className="mt-4">Find and read your book and dolor sit amet consectetur adipisicing elit. Ipsa <br></br>sequi incidunt maxime obcaecati ratione nobis et aperiam, corporis ipsam ducimus</p>
              <div className="felx join mt-8">
                <input className="p-1 border-none rounded-l-md" placeholder="Search a book here" type="text" />
                <button className="bg-blue-600 text-lg text-white p-2 px-5 border-none rounded-r-md">Search</button>
              </div>
            </div>
            <div className="flex-1">
              <Slider></Slider>
            </div>
            </div>
        </div>
    );
};

export default Banner;