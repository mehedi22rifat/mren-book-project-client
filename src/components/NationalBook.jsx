
import NationBookImg from '../assets/awardbooks.png'


const NationalBook = () => {
  return (
    <div className="">


  <div data-aos="fade-up"
        data-aos-duration="3000" className="container px-6 py-16 mx-auto card bg-bash-100 shadow-lg">
  <div className="items-center lg:flex">
    <div className="w-full lg:w-1/2">
      <div className="lg:max-w-lg">
        <h1 className="text-3xl font-semibold  lg:text-5xl">Best place to choose <br /> your <span className="text-blue-500 ">clothes</span></h1>
        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
        <button className="w-full font-bold px-5 py-3 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Explore Now</button>
      </div>
    </div>
    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
      <img className="w-96 h-full lg:max-w-3xl" src={NationBookImg} alt="Catalogue-pana.svg" />
    </div>
  </div>
</div>


    </div>
  );
};

export default NationalBook;
