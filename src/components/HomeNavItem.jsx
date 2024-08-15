import React, { useState } from "react";

const HomeNavItem = ({ itemName, selectItemHandler, selectedItem }) => {
  return (
    <div
      onClick={selectItemHandler}
      className="hover:bg-slate-800 transition-all  cursor-pointer h-full grid justify-items-center text-center basis-3/6"
    >
      <p
        className={`text-white flex  ${
          itemName === selectedItem ? "border-buttonBg border-b-2" : ""
        } items-center w-fit h-full`}
      >
        {itemName}
      </p>
    </div>
  );
};

export default HomeNavItem;
