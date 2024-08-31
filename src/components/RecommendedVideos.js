import React from "react";
import { Link } from "react-router-dom";

const RecommendedVideos = ({ data }) => {
  return (
    <div className="w-full">
      <Link to={"/watch?v=" + data.id} key={data.id}>
        <div className="p-2 w-full flex hover:bg-gray-200 rounded-md">
          <img
            className="rounded-xl"
            src={data?.snippet?.thumbnails?.default?.url}
            alt="thumails"
          />
          <ul className="ml-2 text-ellipsis overflow-hidden">
            <li className="font-bold text-sm text-gray w-[28rem]">
              {data?.snippet?.title}
            </li>
            <li className="text-sm">{data?.snippet?.channelTitle}</li>
            <li className="text-sm">{data?.statistics?.viewCount} Views</li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default RecommendedVideos;
