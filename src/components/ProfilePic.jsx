import React from "react";
import profilepic from "../assets/profilepic.png";

const ProfilePic = () => {
  return (
    <div className="">
      <img src={profilepic} className=" h-10 w-10 rounded-full"></img>
    </div>
  );
};

export default ProfilePic;
