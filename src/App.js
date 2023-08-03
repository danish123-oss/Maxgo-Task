import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListingDetail from "./components/DetailsPage";
import GridView from "./components/GridView";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<GridView />} />
        <Route path="/detail/:id" element={<ListingDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
