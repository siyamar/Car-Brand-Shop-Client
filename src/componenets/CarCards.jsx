import { Link } from "react-router-dom";

const CarCards = ({ car }) => {
  const { _id, name, photo, brandName, description, category, rating, price} = car;
  return (
    <div>
    <div className="card card-side bg-base-100 shadow-xl p-8">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full px-4">
        <div>
        <h2 className="card-title">Name: {name}</h2>
        <p className="text-lg "><span className="font-semibold">Brand</span>: {brandName}</p>
        <p className="text-lg "><span className="font-semibold">Rating</span>: {rating}</p>
        <p className="text-lg"><span className="font-semibold">Category</span>: {category}</p>
        <p className="text-lg"><span className="font-semibold">Price</span>: {price}</p>
        {description.length > 70 ? 
          <p className="text-lg mr-20">{description.slice(0, 70)}.</p>
         : 
          <p>{description}</p>
        }
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical gap-y-4 my-auto">
           <Link to={`/updateProduct/${_id}`}>
           <button className="btn btn-primary text-white">Update</button>
           </Link>
           <Link to={`/showDetails/${_id}`}>
           <button className="btn btn-success text-white">Details</button>
          </Link>
          </div>
        </div>
      </div>
    </div>

    </div>

    
  );
};

export default CarCards;
