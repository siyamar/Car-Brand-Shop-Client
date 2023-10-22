import { Link } from "react-router-dom";

const CarCards = ({ car }) => {
  const { _id, name, photo, brandName, description, category } = car;
  return (
    <div>
        {/* {
            category==_category &&( */}

        <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="h-[250px]" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        {description.length > 50 ? (
          <p>{description.slice(0, 50)}.</p>
        ) : (
          <p>{description}</p>
        )}
        <div className="card-actions justify-end">
          <Link to={`/showDetails/${_id}`}>
          <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>

    </div>

    
  );
};

export default CarCards;
