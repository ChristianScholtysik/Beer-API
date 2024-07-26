import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IBeer } from "../IBeer";

const Home = () => {
  const [randomBeerData, setRandomBeerData] = useState<IBeer[] | null>(null);
  const [_randomBeer, setRandomBeer] = useState<IBeer | null>(null);

  const getRandomBeer = () => {
    if (randomBeerData) {
      const beersWithImages = randomBeerData.filter(
        (beer: IBeer) => beer.image
      );
      if (beersWithImages.length > 0) {
        const randomIndex = Math.floor(Math.random() * beersWithImages.length);
        setRandomBeer(beersWithImages[randomIndex]);
      }
    }
  };

  useEffect(() => {
    fetch("https://api.sampleapis.com/beers/ale")
      .then((res) => res.json())
      .then((data) => {
        setRandomBeerData(data);
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
    <div className="gap-4 justify-center h-screen home">
      <div
        className="hero min-h-screen bg-[url('/public/homer_beer.png')]"
        style={{}}>
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-neutral-300 text-center">
          <div className="max-w-7xl">
            <h1 className="mb-8 text-8xl font-bold max-w-7xl">I want Beer!!</h1>
            <p className="mb-5 text-4xl">
              Ah, beer. The cause of and the solution to all of life´s problems.
            </p>
            <div className="flex space-x-4 justify-center">
              <Link to="/ale">
                <button className="btn btn-homer bg-amber-600 border-none text-neutral-50 h-20 w-70 text-4xl font-display">
                  <img src="/public/Homer Simpson.svg" alt="" />
                  More Beers
                </button>
              </Link>
              <Link to="/ale/random">
                <button
                  className="btn btn-homer bg-red-600 border-none text-neutral-50 h-20 w-30 text-4xl font-display"
                  onClick={getRandomBeer}>
                  Random beer
                  <img src="/public/Homer Simpson (1).svg" alt="" />
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
