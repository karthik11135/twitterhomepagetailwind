import React from "react";
import { useRecoilValue } from "recoil";
import { userIdAtom, usernameAtom } from "../store/userStore";

const ProfileSection = () => {
  const userName = useRecoilValue(usernameAtom);
  const userId = useRecoilValue(userIdAtom);

  return (
    <div className="grid rounded-full mt-auto grid-cols-12 px-2 items-center py-2 hover:bg-slate-800">
      <div className="col-span-2 flex me-1 items-center p-2 rounded-full justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
          />
        </svg>
      </div>
      <div className="col-span-8 ">
        <h3 className="text-white text-sm font-bold">{userName}</h3>
        <p className="text-slate-400 text-sm">{userId}</p>
      </div>
      <div className="col-span-2  flex items-center p-2 rounded-full justify-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProfileSection;
