
import { FaStar } from "react-icons/fa6";
const TestimonialCard = ({}) => {
    return (
     <div>
  <div style={{boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)'}} className="flex flex-col max-w-md align-center justify-between border border-solid border-gray-200 bg-white  rounded-xl">
    <div className="flex flex-col px-6 pt-8 mb-10 space-y-5">
      <svg width={24} height={18} viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-A400 fill-current">
        <path d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z" fill="current" />
      </svg>
      <div className="flex gap-2">
      <FaStar className="text-3xl text-orange-600 font-bold"></FaStar>
      <FaStar className="text-3xl text-orange-600 font-bold"></FaStar>
      <FaStar className="text-3xl text-orange-600 font-bold"></FaStar>
      <FaStar className="text-3xl text-orange-600 font-bold"></FaStar>
      <FaStar className="text-3xl text-orange-600 font-bold"></FaStar>
      </div>
      <p className="body-medium m-0" style={{hyphens: 'auto'}}>These are high-quality courses.
        Trust me. I own around 10 and the price is worth it for the content quality. <a href="https://twitter.com/EducativeInc?ref_src=twsrc%5Etfw">@EducativeInc</a> came at the right time in
        my career. I'm understanding topics better than with any book or online video tutorial I've done. Truly made
        for developers. Thanks <a href="https://t.co/EeKruv5hxM">https://t.co/EeKruv5hxM</a></p>
    </div>
    <div className="flex space-x-2 text-white font-bold bg-blue-600 px-6 pt-6 pb-5 rounded-b-xl">
      <div className="flex lg:flex-row md:flex-row gap-4 flex-col justify-center">
         <div className="overflow-hidden rounded-full bg-slate-50">
           <img alt className="h-14 w-14 object-cover" style={{color: 'transparent'}} src="https://randomuser.me/api/portraits/men/15.jpg" />
        </div>

        <div>
        <p className="heading-six m-0">Anthony Walker</p>
        <p className="body-small m-0 mt-1">@_webarchitect_</p>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default TestimonialCard;