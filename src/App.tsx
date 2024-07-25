import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import BeersOverviewPage from "./pages/BeersOverviewPage";

import BeerDetailPage from "./pages/BeerDetailPage";
import RandomBeerDetailPage from "./pages/RandomBeerDetailPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ale/" element={<BeersOverviewPage />} />
          <Route path="/ale/:id" element={<BeerDetailPage />} />
          <Route path="/ale/random" element={<RandomBeerDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
