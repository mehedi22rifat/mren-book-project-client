import { Link } from "react-router-dom";

const ShopCard = ({ book }) => {
  const { imageURL, bookTitle,authorName,description } = book;
  return (
    <div data-aos="zoom-in" className="card bg-base-100 w-auto shadow-xl">
      <figure>
        <Link to={`/book/${book._id}`}>
        <img
          src={imageURL}
          alt="Shoes"
          title={'Click to book details'}
        />
        </Link>
      </figure>
      <div className="card-body">
       <div className="flex justify-between items-center">
       <div>
       <h2 className="card-title">{bookTitle}</h2>
       <p>{authorName}</p>
       </div>
       <div>
        <h1>${10}</h1>
       </div>
       </div>
        <div className="card-actions w-full">
          <button className="btn btn-primary w-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
