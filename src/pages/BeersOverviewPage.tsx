import AllBeers from "../components/AllBeers";

import Nav from "../components/Nav";

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
