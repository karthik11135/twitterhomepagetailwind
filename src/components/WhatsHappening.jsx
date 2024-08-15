import React from "react";
import Button from "./Button";
import TrendingPosts from "./TrendingPosts";
import { RecoilRoot } from "recoil";
import LiveContent from "./LiveContent";

const WhatsHappening = () => {
  return (
    <RecoilRoot>
      <div
        className={
          "max-w-full mb-4 py-3 px-4 border rounded-2xl border-xborder"
        }
      >
        <h2 className="text-xl text-white font-bold mb-2">What's happening</h2>
        <LiveContent />
        <TrendingPosts />
        <p className="text-buttonBg pb-1">Show more</p>
      </div>
    </RecoilRoot>
  );
};

export default WhatsHappening;
