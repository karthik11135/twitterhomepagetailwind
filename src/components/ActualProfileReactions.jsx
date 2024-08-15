import React from "react";
import ActualProfileReaction from "./ActualProfileReaction";
import {
  LikeIcon,
  RetweetIcon,
  ArrowUpTrayIcon,
  AnalyticsIcon,
  CommentIcon,
  BookmarkIcon,
} from "../storage/ActualProfileIcons";

const ActualProfileReactions = () => {
  return (
    <div className="flex justify-between mt-2.5 mb-2 ">
      <ActualProfileReaction icon={<LikeIcon />} count="104" />
      <ActualProfileReaction icon={<RetweetIcon />} count="22k" />
      <ActualProfileReaction icon={<CommentIcon />} count="31.4k" />
      <ActualProfileReaction icon={<AnalyticsIcon />} count="14" />

      <ActualProfileReaction
        icon={<BookmarkIcon />}
        count={<ArrowUpTrayIcon />}
      />
    </div>
  );
};

export default ActualProfileReactions;
