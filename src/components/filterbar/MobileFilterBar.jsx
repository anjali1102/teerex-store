import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterBar from "./FilterBar";

const MobileFilterBar = () => {
  const [showFilters, setShowFilters] = useState(false);

  function handleFilterToggle() {
    setShowFilters((prevToggle) => !prevToggle);
  }

  return (
    <div className="self-center bg-white sm:hidden block text-2xl cursor-pointer">
      <FaFilter onClick={handleFilterToggle} />

      {showFilters && (
        <div className="absolute right-[44px] top-[80px] z-20">
          <FilterBar />
        </div>
      )}
    </div>
  );
};

export default MobileFilterBar;
