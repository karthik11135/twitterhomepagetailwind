import React from "react";
import HomeNav from "./HomeNav";
import Post from "./Post";
import SearchBar from "./SearchBar";
import PremiumOffer from "./PremiumOffer";
import WhatsHappening from "./WhatsHappening";
import WhoToFollow from "./WhoToFollow";
import Tweets from "./Tweets";

const Home = () => {
  return (
    <>
      <div className="col-span-5 border-r overflow-y-auto border-xborder">
        <HomeNav />
        <Post />
        <Tweets />
      </div>
      <div className="col-span-4 ms-8  mb-64 w-8/12 ">
        <SearchBar />
        <PremiumOffer />
        <WhatsHappening />
        <WhoToFollow />
      </div>
    </>
  );
};

export default Home;
