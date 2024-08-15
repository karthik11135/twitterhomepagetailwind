import React from "react";
import { HamburgerIcon } from "../storage/randomIcons";
const TrendingPost = ({trendingPlace, trendingContent, postsCount}) => {
  return (
    <div className="flex pb-4">
      <div>
        <p className="text-searchplaceholder text-sm">{trendingPlace}</p>
        <h2 className="text-lg font-semibold text-white">{trendingContent}</h2>
        <p className="text-searchplaceholder text-sm">{postsCount} posts</p>
      </div>
      <div className="ms-auto">
        <div className="cursor-pointer hover:bg-slate-800 p-2 rounded-full">

        <HamburgerIcon />
        </div>
      </div>
    </div>
  );
};

export default TrendingPost;
