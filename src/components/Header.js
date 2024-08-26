import { useDispatch } from "react-redux";
import { toggelMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggelMenuHandler = () => {
    dispatch(toggelMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 shadow-lg items-center">
      <div className="flex col-span-1 gap-5 cursor-pointer">
        <img
          onClick={() => toggelMenuHandler()}
          className="h-10"
          alt="hamburger-menu-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
        />
        <img
          className="h-10"
          alt="youtube-logo-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png"
        />
      </div>

      <div className="col-span-10 pr-40 text-center">
        <input
          type="text"
          className="w-1/2 border border-gray-600 rounded-l-full p-2"
        />
        <button className="border border-gray-600 rounded-r-full p-2 px-4 bg-gray-200">
          Search
        </button>
      </div>

      <div className="col-span-1">
        <img
          className="h-10"
          alt="user-icon-img"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
