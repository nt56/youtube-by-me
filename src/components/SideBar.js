import React from "react";

const SideBar = () => {
  return (
    <div className="p-5 shadow-lg w-48">
      <div>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
      </div>
      <hr />

      <div>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
          <li>Music</li>
        </ul>
      </div>
      <hr />

      <div>
        <ul className="pt-5">
          <li>Watch later</li>
          <li>Your Channel</li>
          <li>Playlist</li>
          <li>Setting</li>
        </ul>
      </div>
      <hr />

      <div>
        <ul className="pt-5">
          <li>Help</li>
          <li>History</li>
          <li>Feedback</li>
          <li>Report</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;