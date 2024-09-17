import { useLoaderData } from "react-router-dom";

const SingleBookCard = () => {
  const {
    _id,
    authorName,
    bookTitle,
    imageURL,
    description,
    bookPDFURL,
    Category,
  } = useLoaderData();
  return (
    <div data-aos="flip-right" className=" bg-slate-100">
      <div className="pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[600px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={imageURL}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-full font-bold">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-full font-bold">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4 space-y-7">
              <h2 className="text-2xl font-bold mb-2">Book Name : <span className="text-2xl font-bold text-blue-500">{bookTitle}</span></h2>
              <p className=" text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt.
              </p>
              <h1 className="mb-4">
                <span className="font-bold">Author Name:</span> {authorName}
              </h1>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold ">Price:</span>
                  <span className="">$29.99</span>
                </div>
                <div>
                  <span className="font-bold ">Availability:</span>
                  <span className="">In Stock</span>
                </div>
              </div>
              <div className="mb-4"></div>
              <div className="mb-4"></div>
              <div>
                <span className="font-bold">Product Description:</span>
                <p className=" text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet.
                  Duis dapibus augue vel ipsum pretium, et venenatis sem
                  blandit. Quisque ut erat vitae nisi ultrices placerat non eget
                  velit. Integer ornare mi sed ipsum lacinia, non sagittis
                  mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
                  tincidunt mi consectetur.
                </p>
              </div>
              <div className="mt-6">
                <a className="mt-9" href={bookPDFURL}>
                  <span className="font-bold">Book PDF : </span>
                  <span className="hover:underline pb-2" >{bookPDFURL}</span>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
     

    </div>
  );
};

export default SingleBookCard;
