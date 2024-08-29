import { useDispatch, useSelector } from "react-redux";
import { toggelMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { CiSearch } from "react-icons/ci";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [suggestion, setSuggestion] = useState([]);

  const [showSuggestion, setShowsuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  //make an api call after every key press if the difference between two api calls is <200ms then decline the api call
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);

    //update cache results
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

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

      <div className="col-span-10 pr-40">
        <div>
          <input
            type="text"
            className="px-5 w-1/2 border border-gray-600 rounded-l-full p-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowsuggestion(true)}
            onBlur={() => setShowsuggestion(false)}
          />
          <button className="border border-gray-600 rounded-r-full p-2 px-4 bg-gray-200">
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white py-2 px-3 ml-4 rounded-lg shadow-lg w-[40rem] border border-gray-100">
            <ul>
              {suggestion.map((s) => (
                <li
                  key={s}
                  className="py-2 shadow-sm hover:bg-gray-100 flex gap-3 items-center"
                >
                  <CiSearch /> {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
