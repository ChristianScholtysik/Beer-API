import AllBeers from "../components/AllBeers";

import Nav from "../components/Nav";
import "../../public/jon-tyson-s2ryvZkG1Rk-unsplash.jpg";
import "./BeerOverviewPage.css";
import "../../public/wp3087080.jpg";

const BeersOverviewPage = () => {
  return (
    <div className="overview bg-header">
      <h1>All Beers</h1>
      <AllBeers />
      <div className="sticky bottom-0">
        {" "}
        <Nav />
      </div>
    </div>
  );
};

export default BeersOverviewPage;
