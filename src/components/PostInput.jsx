import React, { useState } from "react";
import { GlobeIcon, ChevronDown } from "../storage/randomIcons";
import Button from "./Button";
import Modal from "./Modal";
import Audience from "./Audience";

const PostInput = () => {
  const [focus, setFocus] = useState(false);
  const focusHandler = () => {
    setFocus(true);
  };
  return (
    <div
      className={`py-2 me-3  ${
        focus === true ? "border-b border-xborder mb-2" : ""
      } `}
    >
      {focus && <Audience />}
      <textarea
        rows={1}
        onFocusCapture={focusHandler}
        type="text"
        className="w-full text-xl my-2 min-h-[3rem] overflow-hidden max-h-[20rem] auto-rows-auto flex items-center font-medium resize-none break-after-column bg-transparent appearance-none focus:outline-none text-white placeholder:text-xborder "
        placeholder={`What is happening?!`}
      ></textarea>
      {focus && (
        <div className="flex gap-2 pb-1">
          <div>
            <GlobeIcon />
          </div>
          <h5 className="text-buttonBg font-bold text-sm">
            Everyone can reply
          </h5>
        </div>
      )}
    </div>
  );
};

export default PostInput;
