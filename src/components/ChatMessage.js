import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-1 shadow-sm p-2 my-2">
      <img
        className="h-8"
        alt="user-icon-img"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className="font-bold">{name}</span>
      <span className="pl-2">{message}</span>
    </div>
  );
};

export default ChatMessage;
