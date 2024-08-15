import React, { act } from "react";

import { NavLink } from "react-router-dom";

const MenuItem = ({ menuName, menuIcon }) => {
  return (
    <NavLink
      to={`/${menuName}`}
      className={`rounded-full mb-3 transition-all w-fit flex gap-6 px-3 py-2 hover:bg-slate-800 cursor-pointer`}
    >
      {({ isActive }) => (
        <>
          <div className=" flex items-center relative ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={isActive ? 2 : 1.5}
              stroke="white"
              className="size-7"
            >
              {menuIcon}
            </svg>
            {/* <div className="rounded-full w-2 h-2 absolute top-0 right-0 p-1 bg-buttonBg"></div> */}
          </div>
          <h2
            className={`text-slate-50 text-xl ${isActive ? `font-bold` : ``}`}
          >
            {menuName}
          </h2>
        </>
      )}
    </NavLink>
  );
};

export default MenuItem;
