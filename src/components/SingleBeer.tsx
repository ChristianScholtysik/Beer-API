import { Link } from "react-router-dom";
import { IBeer } from "../IBeer";

interface IBeerProps {
  beer: IBeer;
}

const SingleBeer: React.FC<IBeerProps> = (props) => {
  const defaultImage = "/public/8979036078110.png";
  return (
    <>
      <Link to={`/ale/${props.beer.id}`} className="item">
        {/* <div className="card glass w-96">
          <figure>
            <img src={props.beer.image} alt={props.beer.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{props.beer.name} </h2>
            <p>{props.beer.price}</p>
            <h4>{props.beer.rating.average}</h4>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">Read more!</button>
            </div>
          </div>
        </div> */}
        {/* <div className="card bg-stone-100 w-96 shadow-xl ">
          <figure>
            <img
              src={props.beer.image}
              alt={props.beer.name}
              className="my-8"
              onError={(e) => (e.currentTarget.src = defaultImage)}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-display">{props.beer.name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn  bg-lime-900 border-none text-white">
                Read More
              </button>
            </div>
          </div>
        </div> */}
        <div className="card card-side bg-stone-100 shadow-xl">
          <figure>
            <img
              src={props.beer.image}
              alt={props.beer.name}
              className="my-8"
              onError={(e) => (e.currentTarget.src = defaultImage)}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{props.beer.name}</h2>
            <p>{props.beer.price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-warning">Details</button>
            </div>
          </div>
        </div>
      </Link>
      {/* <Nav />
      <Footer /> */}
    </>
  );
};

export default SingleBeer;
