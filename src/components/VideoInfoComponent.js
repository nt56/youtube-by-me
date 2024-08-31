import React from "react";
import { PiShareFat } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const VideoInfoComponent = ({ info }) => {
  return (
    <div className="p-2">
      <div>
        <h3 className="font-extrabold text-2xl">{info?.snippet?.title}</h3>
      </div>

      <div className="flex justify-center gap-12 items-center pt-2">
        <div className="flex gap-2 items-center">
          <p className="font-bold text-gray-700 pr-5">
            {info?.snippet?.channelTitle.toUpperCase().slice(0, 15)}
          </p>
        </div>
        <button className="bg-red-600 text-white px-2 py-1 rounded-xl">
          Subscribe
        </button>
        <button className="items-center flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300 ">
          <FaEye className="mx-2 text-xl" />
          {info?.statistics?.viewCount}
        </button>
        <button className=" items-center border flex border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300">
          <FiThumbsUp className="mx-3" /> {info?.statistics?.likeCount} |{" "}
          <FiThumbsDown className="mx-3" />
        </button>
        <button className=" items-center flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300 ">
          <PiShareFat className="mx-2 text-xl" /> Share
        </button>
        <button className="items-center flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300 ">
          <GoDownload className="mx-1 text-xl" /> Download
        </button>
        <button className="border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300 ">
          <BsThreeDots />
        </button>
      </div>
    </div>
  );
};

export default VideoInfoComponent;
