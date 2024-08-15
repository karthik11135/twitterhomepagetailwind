import React from "react";
import Modal from "./Modal";
import { ChevronDown, TickMark } from "../storage/randomIcons";
import { GlobeIcon } from "../storage/randomIcons";
import AudienceModal from "./AudienceModal";
import { useRecoilState, useRecoilValue } from "recoil";
import { audienceAtom, showModalAtom } from "../store/userStore";

// https://pbs.twimg.com/community_banner_img/1717282077488431104/RyByFINY?format=jpg&name=240x240

const Audience = () => {
  const audience = useRecoilValue(audienceAtom);
  const [showModal, setShowModal] = useRecoilState(showModalAtom);
  console.log(showModal);
  return (
    <div className="relative w-fit">
      {showModal && <AudienceModal />}
      <button
        onClick={() => setShowModal(true)}
        className="appearance-none mb-1 transition-all bg-slate-950 text-buttonBg border-2 text-sm border-xborder rounded-full px-1.5 py-0.4 font-semibold"
      >
        <div className="flex px-1 relative tracking-wide gap-2">
          <p>{audience}</p>
          <div className="flex items-center">
            <ChevronDown />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Audience;
