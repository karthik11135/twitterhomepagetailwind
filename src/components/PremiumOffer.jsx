import React from "react";
import Button from "./Button";
import Modal from "./Modal";

const PremiumOffer = () => {
  return (
    <div className={"max-w-full mb-4 py-3 px-4 border rounded-2xl border-xborder"}>
      <h2 className="text-xl text-white font-bold mb-2">
        Subscribe to Premium
      </h2>
      <p className="mb-2.5 text-sm text-white">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <Button>Subscribe</Button>
    </div>
  );
};

export default PremiumOffer;
