import React from "react";
import TrendingPost from "./TrendingPost";
import { useRecoilValue } from "recoil";
import { trendingPostsAtom } from "../store/userStore";

const TrendingPosts = () => {
  const trendingPosts = useRecoilValue(trendingPostsAtom);
  return (
    <div>
      {trendingPosts.map((tp, ind) => {
        return (
          <TrendingPost
            trendingPlace={tp.trendingPlace}
            trendingContent={tp.trendingContent}
            postsCount={tp.postsCount}
            key={ind}
          />
        );
      })}
    </div>
  );
};

export default TrendingPosts;
