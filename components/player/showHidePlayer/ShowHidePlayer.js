"use client";

import { useState } from "react";

export default function ShowHidePlayer() {
  const [show, setShow] = useState(false);

  return (
    <section className="w-full h-12 flex justify-center items-center">
      <i
        onClick={() => {
          setShow(!show);
        }}
        className="fas fa-angle-double-down w-full p-1 text-center text-white/50 animate-bounce"
      ></i>
    </section>
  );
}
