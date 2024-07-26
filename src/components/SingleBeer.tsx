import { Link } from "react-router-dom";
import { IBeer } from "../IBeer";
import DefaultImage from "../../public/8979036078110.png";

interface IBeerProps {
  beer: IBeer;
}

const SingleBeer: React.FC<IBeerProps> = (props) => {
  const defaultImage = DefaultImage;
  return (
    <>
      <Link to={`/ale/${props.beer.id}`} className="item">
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 img-overview">
            <img
              src={props.beer.image}
              alt={props.beer.name}
              className="my-8 img-overview"
              onError={(e) => (e.currentTarget.src = defaultImage)}
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {props.beer.name}
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button">
              Details
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleBeer;
