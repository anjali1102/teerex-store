import React from "react";
import HeroIcon from "./HeroIcon";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="flex relative items-center justify-between px-4 sm:px-12 py-8 bg-yellow-50">
      <HeroIcon />
      <Links />
    </div>
  );
};

export default Navbar;
