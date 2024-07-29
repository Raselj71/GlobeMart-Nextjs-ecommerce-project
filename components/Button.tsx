"use client";
import React from "react";

interface propstype {
  id: Number;
  title: String;
  price: String;
  image: String;
}
function Button({ id, title, price, image }: propstype) {
  const handleClick = () => {
    console.log("button is clicked");
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="w-full bg-mainColoer rounded-sm hover:bg-black py-1 text-lg text-white"
      >
        Add to cart
      </button>
    </div>
  );
}

export default Button;
