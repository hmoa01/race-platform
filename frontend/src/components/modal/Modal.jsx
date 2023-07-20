import React from 'react';

const Modal = ({ open, children, close }) => {
  if (!open) return null;
  return (
    <div>
      <div onClick={close} className="absolute z-10 inset-0 w-full h-full bg-black opacity-50"></div>
      <div onClick={(e) => e.stopPropagation()} className="fixed w-[1200px] z-20 left-[20%] top-[15%] bg-slate-500 ">
        <button onClick={close} className="absolute top-1 right-2 z-50">
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
