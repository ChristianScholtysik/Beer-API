import { useEffect, useState } from "react";
import { IBeer } from "../IBeer";
import { Link } from "react-router-dom";
import DefaultImage from "../../public/8979036078110.png";

const RandomBeerDetailPage = () => {
  const defaultImage = DefaultImage;
  const [_randomBeerData, setrandomBeerData] = useState<IBeer[] | null>(null);
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
    <section className="random-wrapper">
      <div className="random flex items-center justify-center">
        <div className="card bg-slate-100 max-w-xl flex-grow  items-center ">
          <figure>
            <img
              className="my-8"
              src={randomBeer?.image}
              onError={(e) => (e.currentTarget.src = defaultImage)}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-slate-800 text-5xl font-serif">
              {randomBeer?.name}
            </h2>
            <div className="divider divider-warning text-slate-800 font-bold mt-12 mb-8">
              Infos
            </div>
            <p className="text-slate-800 italic">
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Delectus culpa accusantium adipisci perferendis ab eveniet
              deleniti incidunt quam porro mollitia. Voluptatibus alias incidunt
              quaerat necessitatibus culpa, vel asperiores commodi maxime?""
            </p>
            <div className="divider divider-warning text-slate-800 mt-8 mb-12">
              Rating
            </div>
            <p className="text-slate-800 font-bold text-xl">
              Rating: {randomBeer?.rating.average.toFixed(2)}
            </p>
            <p className="text-slate-800 text-2xl mb-12">
              Reviews: {randomBeer?.rating.reviews}
            </p>
            <div className="card bg-orange-400 rounded-box grid h-20 flex-grow place-items-center text-white text-2xl font-bold">
              Price: {randomBeer?.price}
            </div>

            <div className="card-actions justify-center">
              <Link to="/">
                <button className="btn  bg-orange-900 border-none text-white">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RandomBeerDetailPage;
