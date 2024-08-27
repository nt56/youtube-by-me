import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;

  const { likeCount, viewCount } = statistics;

  return (
    <div className="p-3 w-72 shadow-lg rounded-lg h-[400px]">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>channel - {channelTitle}</li>
        <li>likes - {likeCount}</li>
        <li>views - {viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
