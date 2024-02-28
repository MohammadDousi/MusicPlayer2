import React from "react";

export default function Loading() {
  return (
    <div className="w-full h-full absolute left-0 top-0 z-50 bg-primeryBackDarker flex flex-col justify-center items-center gap-3">
      <p className="text-lg font-normal text-textColor/80 tracking-wide">
        Loading...
      </p>
    </div>
  );
}
