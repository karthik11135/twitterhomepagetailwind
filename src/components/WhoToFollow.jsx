import React from "react";
import UserProfiles from "./UserProfiles";

const WhoToFollow = () => {
  return (
    <div>
      <div
        className={
          "max-w-full mb-4 py-3 px-4 border rounded-2xl border-xborder"
        }
      >
        <h2 className="text-xl text-white font-bold mb-4">Who to follow</h2>
        <UserProfiles />
        <p className="text-buttonBg pb-1">Show more</p>
      </div>
    </div>
  );
};

export default WhoToFollow;
