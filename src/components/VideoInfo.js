import React from "react";
import { YOUTUBE_VIDEO_BYID } from "../utils/constants";
import { useEffect, useState } from "react";
import VideoPreviewShimmer from "./VideoPreviewShimmer";
import VideoInfoComponent from "./VideoInfoComponent";

const VideoInfo = ({ videoId }) => {
  const [videoInfo, setVideoInfo] = useState([]);

  useEffect(() => {
    getVideoInfo();
  }, []);

  const getVideoInfo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_BYID + videoId);
    const json = await data.json();
    setVideoInfo(json.items);
  };

  if (videoInfo.length === 0) return <VideoPreviewShimmer />;

  return (
    <div className="shadow-lg rounded-lg">
      <iframe
        className="rounded-xl"
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      {videoInfo.map((vinfo) => (
        <VideoInfoComponent key={vinfo.id} info={vinfo} />
      ))}
    </div>
  );
};

export default VideoInfo;
