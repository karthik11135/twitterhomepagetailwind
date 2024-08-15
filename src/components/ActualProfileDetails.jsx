import React from "react";
import { HamburgerIcon, VerifiedIcon } from "../storage/randomIcons";

const ActualProfileDetails = () => {
  return (
    <div className="flex gap-1 mb-2">
      <h3 className="text-white font-bold">Paul Graham</h3>
      <div className="flex items-center">
        <VerifiedIcon />
      </div>
      <p className="text-sm flex items-center text-searchplaceholder">@paul_graham . 10h</p>
      <div className="ms-auto flex items-center me-2">
        <HamburgerIcon />
      </div>
    </div>
  );
};

export default ActualProfileDetails;
