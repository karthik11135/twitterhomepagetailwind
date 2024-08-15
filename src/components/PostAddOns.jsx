import React from "react";
import { postIconCollection } from "../storage/postsIconStorage";

const PostAddOns = () => {

  return (
    <div className="flex gap-2 flex-1">
      {postIconCollection.map((pi, ind) => {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            key={ind}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="rgba(29,155,240,255)"
            className="size-8 cursor-pointer rounded-full hover:bg-slate-800 p-1.5"
          >
            {pi} 
          </svg>
        );
      })}
    </div>
  );
};

export default PostAddOns;
