import React from "react";
import { SearchIcon } from "../storage/randomIcons";

const SearchBar = () => {
  return (
    <div className="flex gap-2 focus:border-buttonBg border-solid w-full text-lg rounded-full mt-2 mb-5 py-2 px-4 bg-searchbg ">
        <div className="flex items-center cursor-pointer">
            <SearchIcon />
        </div>
      <div className="flex-1">
        <input
          className="w-full text-md bg-transparent overflow-hidden flex items-center resize-none break-after-column appearance-none focus:outline-none text-white placeholder:text-searchplaceholder"
          placeholder="Search"
        ></input>
      </div>
    </div>
  );
};

export default SearchBar;
