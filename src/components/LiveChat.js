import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomCompliment, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [userMessage, setUserMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomCompliment(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="flex flex-col w-full shadow-lg rounded-lg">
      <div className="ml-2 p-2 w-full border border-black h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full m-2 flex justify-evenly items-center border border-black py-5 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "User",
              message: userMessage,
            })
          );

          setUserMessage("");
        }}
      >
        <input
          type="text"
          className="border border-black rounded-xl w-[70%] p-1"
          value={userMessage}
          onChange={(e) => {
            setUserMessage(e.target.value);
          }}
        />
        <button className="w-[20%] rounded-lg bg-gray-500 text-white py-2 ">
          submit
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
