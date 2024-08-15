import React from "react";
import HomeNavItem from "./HomeNavItem";
import { useState } from "react";

const HomeNav = () => {
  const [selectedItem, setSelectedItem] = useState("For you");

  const selectItemHandler = () => {
    console.log("Hey there")
    if (selectedItem === "For you") setSelectedItem("Following");
    else setSelectedItem("For you");
  };

  return (
    <nav className="flex w-full border-xborder h-14 border-b">
      <HomeNavItem itemName={"For you"} selectItemHandler={selectItemHandler} selectedItem={selectedItem}/>
      <HomeNavItem itemName={"Following"} selectItemHandler={selectItemHandler} selectedItem={selectedItem}/>
    </nav>
  );
};

export default HomeNav;
