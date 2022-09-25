import React from "react";
import FilterBar from "../components/filterbar/FilterBar";
import MobileFilterBar from "../components/filterbar/MobileFilterBar";
import ProductsList from "../components/products/ProductsList";
import SearchBar from "../components/search-bar/SearchBar";

const Main = () => {
  return (
    <div>
      <div className="flex gap-4 justify-center relative">
        <SearchBar />
        <MobileFilterBar />
      </div>
      <div className="flex items-start gap-8">
        <div className="sm:block hidden">
          <FilterBar />
        </div>
        <ProductsList />
      </div>
    </div>
  );
};

export default Main;
