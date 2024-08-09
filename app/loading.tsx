
import React from "react";

import Animation from "@/lib/loadinglottie.json";
export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
  };
  return (
    <div className="w-full h- flex justify-center items-center">
        <div className="animate-bounce text-2xl font-bold text-mainColoer">
             
     Loading...

        </div>
    </div>
  );
}
