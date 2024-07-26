import { useEffect, useState } from "react";
import { IBeer } from "../IBeer";
import { Link, useParams } from "react-router-dom";
import DefaultImage from "../../public/8979036078110.png";
import "../../public/green_beer.jpeg";

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

  const defaultImage = DefaultImage;

  const average: number = Number(beerDataDetail?.rating.average.toFixed(1));

  interface StarRatingProps {
    average: number;
  }

  const StarRating: React.FC<StarRatingProps> = ({ average }) => {
    const filledStars = Math.floor(average);
    const hasHalfStar = average % 1 >= 0.5;
    const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

    const renderStars = () => {
      const stars = [];
      for (let i = 0; i < filledStars; i++) {
        stars.push(
          <svg
            key={`filled-${i}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-yellow-700 cursor-pointer">
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        );
      }
      if (hasHalfStar) {
        stars.push(
          <svg
            key="half"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-yellow-700 cursor-pointer">
            <path
              fillRule="evenodd"
              d="M12 17.27l-4.51 2.83a.77.77 0 01-1.14-.81l1.08-4.67-3.63-3.11a.77.77 0 01.47-1.34l4.84-.39 1.88-4.51c.29-.69 1.33-.69 1.62 0l1.88 4.51 4.84.39a.77.77 0 01.47 1.34l-3.63 3.11 1.08 4.67a.77.77 0 01-1.14.81L12 17.27zM12 2.75a1.77 1.77 0 00-1.62 1.11L8.5 8.32l-4.84.39a1.77 1.77 0 00-1.11 3.08l3.63 3.11L4.36 20.8a1.77 1.77 0 002.62 1.87L12 19.16l4.5 2.83a1.77 1.77 0 002.62-1.87l-1.08-4.67 3.63-3.11a1.77 1.77 0 00-1.11-3.08l-4.84-.39-1.88-4.51A1.77 1.77 0 0012 2.75z"
              clipRule="evenodd"
            />
          </svg>
        );
      }
      for (let i = 0; i < emptyStars; i++) {
        stars.push(
          <svg
            key={`empty-${i}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer text-blue-gray-500">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        );
      }
      return stars;
    };

    return <div className="inline-flex items-center">{renderStars()}</div>;
  };

  return (
    <>
      <div className="hero hero-detail min-h-screen ">
        <div className="hero-content bg-stone-900 text-center hero-overlay bg-opacity-80 min-w-full">
          <div className="max-w-lg flex-col justify-center items-center img-wrapper">
            <img
              src={beerDataDetail?.image}
              className="flex mb-8 "
              onError={(e) => (e.currentTarget.src = defaultImage)}
            />

            <h1 className="text-5xl font-bold font-sans h1-detail">
              {beerDataDetail?.name}
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <div className="p-6">
              <h1 className="text-xl mb-4">
                Rating: {beerDataDetail?.rating.average.toFixed(2)}
              </h1>
              <StarRating average={average} />
            </div>
            <p className="mb-2">
              Reviews: {beerDataDetail?.rating.reviews.toFixed(2)}
            </p>
            <h2 className="mb-8 text-3xl">Price: {beerDataDetail?.price}</h2>
            <div>
              {" "}
              <Link to="/">
                <button className="btn btn-outline btn-warning mx-4 .">
                  Buy Now
                </button>{" "}
              </Link>
              <Link to="/ale">
                <button className="btn btn-outline btn-warning mx-4 .">
                  Back to Overview
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeerDetailPage;
