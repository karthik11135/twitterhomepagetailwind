import React from "react";

const LiveContent = () => {
  return (
    <div className="grid grid-cols-5 gap-2 py-4 cursor-pointer">
      <div className="col-span-2">
        <img
          className="rounded-lg h-25  w-25 object-scale-down"
          src="https://pbs.twimg.com/semantic_core_img/1808533826286559232/zQ70R1to?format=jpg&name=360x360"
        />
      </div>
      <div className="col-span-3">
        <h3 className="font-medium text-white text-md">
          Esports World Cup 2024
        </h3>
        <p className="text-searchplaceholder text-sm">Esports live</p>
      </div>
    </div>
  );
};

export default LiveContent;
