import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants.js";
import VideoCard from "./VideoCard.js";
import { Link } from "react-router-dom";

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

  return (
    <div className="flex w-auto flex-wrap items-center justify-center self-stretch gap-2">
      {videos.map((videoCard) => (
        <Link to={"/watch?v=" + videoCard.id} key={videoCard.id}>
          <VideoCard info={videoCard} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
