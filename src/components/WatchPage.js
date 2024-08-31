import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import VideoInfo from "./VideoInfo";
import LiveChat from "./LiveChat";
import RecommendedVideos from "./RecommendedVideos";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useState } from "react";

const WatchPage = () => {
  const [suggestion, setSuggestion] = useState([]);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  //sidebar will close when click on video card
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getRecomendedVideos();
  }, []);

  const getRecomendedVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setSuggestion(json.items);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="m-5 flex gap-2">
        <VideoInfo videoId={videoId} />
        <LiveChat />
      </div>

      <div className="w-full flex justify-between gap-2">
        <CommentsContainer />
        <div className="overflow-y-scroll h-[100vh] w-[36%] flex flex-col mt-2 shadow-lg">
          {suggestion.map((v) => (
            <RecommendedVideos key={v.id} data={v} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
