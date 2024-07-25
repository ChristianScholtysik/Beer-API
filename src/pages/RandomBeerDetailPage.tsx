import { useEffect, useState } from "react";
import { IBeer } from "../IBeer";
import { Link, useParams } from "react-router-dom";

const RandomBeerDetailPage = () => {
  const defaultImage = "/public/8979036078110.png";
  const [randomBeerData, setrandomBeerData] = useState<IBeer[] | null>(null);
  const [randomBeer, setRandomBeer] = useState<IBeer | null>(null);

  useEffect(() => {
    fetch("https://api.sampleapis.com/beers/ale")
      .then((res) => res.json())
      .then((data) => {
        setrandomBeerData(data);
        const beersWithImages = data.filter((beer: IBeer) => beer.image);
        if (beersWithImages.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * beersWithImages.length
          );
          setRandomBeer(beersWithImages[randomIndex]);
        }
      })
      .catch((err) => console.error("Fetch failed :-(", err));
  }, []);

  return (
    <div className="random">
      <div className="card glass w-96">
        <figure>
          <img
            className="my-8"
            src={randomBeer?.image}
            onError={(e) => (e.currentTarget.src = defaultImage)}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{randomBeer?.name}</h2>
          <p>Rating: {randomBeer?.rating.average.toFixed(2)}</p>
          <p>Reviews: {randomBeer?.rating.reviews.toFixed(2)}</p>
          <h5>Price: {randomBeer?.price}</h5>

          <div className="card-actions justify-end">
            <Link to="/">
              <button className="btn  bg-lime-900 border-none text-white">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomBeerDetailPage;
