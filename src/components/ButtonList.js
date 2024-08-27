import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Cricket",
    "Songs",
    "Live",
    "MMA",
    "Anime",
    "Coding",
    "Gaming",
    "Fitness",
    "News",
    "Comedy",
    "Sports",
    "Kids",
    "IT",
    "Bollywood",
    "Hollywood",
  ];

  return (
    <div className="flex py-2">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
