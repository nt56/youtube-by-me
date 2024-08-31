import React from "react";
import { RxDotFilled } from "react-icons/rx";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;

  const { viewCount } = statistics;

  return (
    <div className="p-3 w-72 hover:shadow-lg rounded-lg flex flex-col">
      <img
        className="rounded-xl w-full"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <h4 className="font-extrabold py-3">{title}</h4>
      <ul className=" items-center font-gray-400 text-lg ">
        <li className="flex items-center font-bold text-gray-600">
          {channelTitle} <RxDotFilled />
        </li>
        <li className="flex items-center gap-2">{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
