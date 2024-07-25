import { useEffect, useState } from "react";
import { IBeer } from "../IBeer";
import { Link, useParams } from "react-router-dom";

const BeerDetailPage = () => {
  const [beerDataDetail, setBeerDataDetail] = useState<IBeer | null>(null);

  const { id } = useParams<{ id: string }>();
  console.log(id);

  useEffect(() => {
    fetch(`https://api.sampleapis.com/beers/ale/${id}`)
      .then((res) => res.json())
      .then((data) => setBeerDataDetail(data))
      .catch((err) => console.error("Fehler Detail page", err));
  }, [id]);

  return (
    <>
      {/* <div className="card glass w-96">
        <figure>
          <img src={beerDataDetail?.image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{beerDataDetail?.name}</h2>
          {/* <p>{beerDataDetail?.rating.average}</p>*/}
      {/* <p>{beerDataDetail?.rating.reviews.toFixed(2)}</p> 
          <h5>{beerDataDetail?.price}</h5>
          <div className="card-actions justify-end">
            <Link to="/">
              <button className="btn btn-primary">Back</button>
            </Link>
          </div>
        </div>
      </div> 
    */}
      <div className="hero bg-stone-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-lg flex-col justify-center items-center">
            <img src={beerDataDetail?.image} className="flex mb-8 " />

            <h1 className="text-5xl font-bold font-display">
              {beerDataDetail?.name}
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <p>Rating: {beerDataDetail?.rating.average.toFixed(2)}</p>
            <p>Reviews: {beerDataDetail?.rating.reviews.toFixed(2)}</p>
            <h2 className="mb-8 ">Price: {beerDataDetail?.price}</h2>
            <button className="btn btn-outline btn-info mx-4 .">Buy Now</button>
            <Link to="/ale">
              <button className="btn btn-outline btn-info mx-4 .">
                Back to Overview
              </button>
            </Link>
            {/* <Link to="/">
              <button className="btn btn-primary mx-4 .">Back to Start</button>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BeerDetailPage;
