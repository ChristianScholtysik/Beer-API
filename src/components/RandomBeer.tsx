import { useEffect, useState } from "react";
import { IBeer } from "../IBeer";
import SingleBeer from "./SingleBeer";

const RandomBeer = () => {
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
    <>
      <section>{randomBeer && <SingleBeer beer={randomBeer} />}</section>
    </>
  );
};

export default RandomBeer;
