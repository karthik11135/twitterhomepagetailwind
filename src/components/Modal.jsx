import React from "react";

const Modal = ({ className, children }) => {
  return (
    <div
      className={`rounded-2xl z-50 shadow-sm ${className} border bg-slate-950 border-xborder shadow-slate-700 absolute text-white py-3`}
    >
      {children}
    </div>
  );
};

export default Modal;
