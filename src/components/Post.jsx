import React from "react";
import ProfilePic from "./ProfilePic";
import PostContent from "./PostContent";
import { RecoilRoot } from "recoil";

const Post = () => {
  return (
    <RecoilRoot>
      <div className="grid grid-cols-10 border-b border-xborder">
        <div className="mx-auto mt-3 flex col-span-1 justify-center">
          <ProfilePic />
        </div>
        
        <div className="col-span-9 mb-2">
          <PostContent />
        </div>
      </div>
    </RecoilRoot>
  );
};

export default Post;
