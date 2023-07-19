import React from 'react';

const Modal = ({ open, children }) => {
  if (!open) return null;
  return (
    <div className="absolute z-[100] inset-0 w-full h-full bg-black opacity-50">
      <div className="z-[999] flex m-auto left bg-slate-500 ">{children}</div>
    </div>
  );
};

export default Modal;
