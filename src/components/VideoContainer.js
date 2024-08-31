import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants.js";
import VideoCard from "./VideoCard.js";
import { Link } from "react-router-dom";
import ShimmerUI from "./ShimmerUI.js";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    showVideos();
  }, []);

  const showVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  return videos.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="flex w-full flex-wrap items-center justify-center gap-2">
      {videos.map((videoCard) => (
        <Link to={"/watch?v=" + videoCard.id} key={videoCard.id}>
          <VideoCard info={videoCard} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
