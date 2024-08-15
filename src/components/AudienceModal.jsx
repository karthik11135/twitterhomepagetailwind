import React from "react";
import Modal from "./Modal";
import { TickMark, GlobeIcon } from "../storage/randomIcons";
import { useRecoilState, useSetRecoilState } from "recoil";
import { audienceAtom, showModalAtom } from "../store/userStore";

const AudienceModal = () => {
  const [audience, setAudience] = useRecoilState(audienceAtom);
  const [showModal, setShowModal] = useRecoilState(showModalAtom)

  return (
    <Modal className={"w-50 w-64 top-8 left-1"}>
      <h2
        className="text-xl px-3 text-start text-white font-extrabold mb-1"
      >
        Choose Audience
      </h2>
      <div
        onClick={() => {
          setAudience("Everyone");
          setShowModal(false);
        }}
        className="flex gap-2 px-3 py-4 mb-2 cursor-pointer hover:bg-xborder"
      >
        <GlobeIcon className={"size-8"} />
        <h4 className="text-white flex items-center text-md font-bold">
          Everyone
        </h4>
        {audience === "Everyone" ? (
          <div className="ms-auto flex items-center">
            <TickMark />
          </div>
        ) : null}
      </div>
      <div>
        <h3 className="text-start px-3 text-md font-bold">My Communities</h3>
        <div className="grid grid-cols-6 my-1 hover:bg-xborder py-3">
          <div className="col-span-2 flex items-center">
            <img
              className=" scale-75 rounded-lg"
              src="https://pbs.twimg.com/community_banner_img/1717282077488431104/RyByFINY?format=jpg&name=240x240"
            />
          </div>
          <div
            onClick={() => {
              setAudience("Open Source Contributors");
              setShowModal(false);
            }}
            className="text-white cursor-pointer text-start col-span-3 text-md font-semibold "
          >
            <p>Open Source Contributors</p>
            <div className="flex">
              <p className="text-slate-400">1.2k members</p>
            </div>
          </div>
          {audience === "Open Source Contributors" ? (
            <div className="ms-auto flex items-center col-span-1 pe-3">
              <TickMark />
            </div>
          ) : null}
        </div>
      </div>
    </Modal>
  );
};

export default AudienceModal;
