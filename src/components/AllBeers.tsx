import { useEffect, useState } from "react";
import { IBeer } from "../IBeer";
import SingleBeer from "./SingleBeer";

const AllBeers = () => {
  const [allBeersData, setAllBeersData] = useState<IBeer[] | null>(null);

  useEffect(() => {
    fetch("https://api.sampleapis.com/beers/ale")
      .then((res) => res.json())
      .then((data) => setAllBeersData(data))
      .catch((err) => console.error("Fetch failed :-(", err));
  }, []);
  console.log(allBeersData);

  return (
    <>
      <section className="list">
        {allBeersData?.map((beer, index) =>
          beer.image ? <SingleBeer key={index} beer={beer} /> : null
        )}
      </section>
    </>
  );
};

export default AllBeers;
