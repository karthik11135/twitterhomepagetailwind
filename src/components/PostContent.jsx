import React from "react";
import PostInput from "./PostInput";
import PostAddOns from "./PostAddOns";
import Button from "./Button";

const PostContent = () => {
  return (
    <>
      <PostInput />
      <div className="flex me-3">
        <PostAddOns />
        <Button className="py-0.5">Post</Button>
      </div>
    </>
  );
};

export default PostContent;
