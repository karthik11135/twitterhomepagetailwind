import React from "react";
import { menuCollection } from "../storage/menuStorage";
import MenuItem from "./MenuItem";
import Button from "./Button";
import AppIcon from "./AppIcon";
import App from "../App";
import ProfileSection from "./ProfileSection";
import { RecoilRoot } from "recoil";

const Sidebar = () => {
  return (
    <div className="bg-slate-950 z-0 border-r sticky top-0 border-xborder h-screen grid grid-cols-12 col-span-3">
      <div className="col-span-9  flex flex-col col-start-4 p-2 w-fit">
        <AppIcon />
        <div className="mb-4 grid grid-cols-4">
          <div className="col-span2">
            {menuCollection.map((menuContents, index) => {
              return (
                <MenuItem
                  key={index}
                  menuIcon={menuContents.menuIcon}
                  menuName={menuContents.menuName}
                />
              );
            })}
          </div>
        </div>
        <div className="mx-3">
          <Button className="block w-full text-lg">Post</Button>
        </div>
        <div className="mt-auto h-full mb-2 flex items-end flex-col">
          <RecoilRoot>
            <ProfileSection />
          </RecoilRoot>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
