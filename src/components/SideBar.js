import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdVideoLibrary } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { MdPlaylistAddCheck } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdSubscriptions } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen); //subscribing the store

  if (!isMenuOpen) return null; //early return pattern

  return (
    <div className="p-5 shadow-lg w-60">
      <div className="pb-5">
        <ul className="flex flex-col gap-5 justify-start p-2 cursor-pointer">
          <li className="hover:bg-gray-300">
            <Link className="flex items-center p-1 gap-3" to="/">
              <IoMdHome />
              Home
            </Link>
          </li>
          <li className="flex items-center p-1 gap-3 hover:bg-gray-300">
            <SiYoutubeshorts />
            Shorts
          </li>
          <li className="flex items-center p-1 gap-3 hover:bg-gray-300">
            <MdVideoLibrary />
            Videos
          </li>
          <li className="flex items-center p-1 gap-3 hover:bg-gray-300">
            <MdLiveTv />
            Live
          </li>
          <li className="flex items-center p-1 gap-3 hover:bg-gray-300">
            <MdWatchLater />
            Watch later
          </li>
          <li className="flex items-center p-1 gap-3 hover:bg-gray-300">
            <MdPlaylistAddCheck />
            Playlist
          </li>
          <li className="flex items-center p-1 gap-3 hover:bg-gray-300">
            <IoSettingsOutline />
            Setting
          </li>
        </ul>
      </div>
      <hr className="w-full font-extrabold" />

      <div className="p-2">
        <h1 className="font-bold pt-5 pb-5 flex gap-3 items-center">
          <MdSubscriptions />
          Subscriptions
        </h1>
        <ul className="flex flex-col gap-5  justify-start cursor-pointer">
          <li className="flex items-center p-1 gap-3 hover:bg-gray-300">
            <FaUserCircle />
            Akashay Saini
          </li>
          <li className="flex items-center p-1 gap-3 hover:bg-gray-300">
            <FaUserCircle />
            Great Stack
          </li>
          <li className="flex items-center p-1 gap-3 hover:bg-gray-300">
            <FaUserCircle />
            WWE
          </li>
          <li className="flex items-center p-1 gap-3 hover:bg-gray-300">
            <FaUserCircle />
            UFC
          </li>
          <li className="flex items-center p-1 gap-3 hover:bg-gray-300">
            <FaUserCircle />
            T-Series
          </li>
          <li className="flex items-center p-1 gap-3 hover:bg-gray-300">
            <FaUserCircle />
            ECB
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
