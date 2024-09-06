import favoriteImg from "../assets/favoritebook.jpg";

const FavoriteBook = () => {
  return (
    <div className="flex flex-col card bg-base-100 shadow-xl p-1  mt-11 mb-10 lg:flex-row md:flex-row gap-10 lg:gap-7 justify-between items-center ">
      <div>
        <img className="" src={favoriteImg} alt="" />
      </div>
      <div>
        <h1 className="text-3xl lg:text-5xl font-bold">
          Find Your Favorite <br></br>{" "}
          <span className="text-blue-600 font-semibold">book here</span>
        </h1>
        <p className="mt-7">
          Conveniently innovate one-to-one partnerships via plug-and-play
          products. Energistically aggregate holistic intellectual capital
          rather than leading-edge strategic theme areas. Intrinsicly evolve
          cutting-edge customer service via.
        </p>
        <div className="flex justify-between items-center mt-8">
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold">800+</h1>
            <p className="text-slate-700">Book Listing</p>
          </div>
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold">550+</h1>
            <p>Register User</p>
          </div>
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold">1200+</h1>
            <p>PDF Dawnloaded</p>
          </div>
        </div>
        {/* button */}
        <a
          href="#_"
          className="inline-flex mt-9 items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
        >
          Explore Now
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FavoriteBook;
