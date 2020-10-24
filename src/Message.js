import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Message.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const Message = () => {
  const user = useSelector(selectUser);

  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message__info">
        <h4>
          {user.displayName}
          <span className="message__timestamp"> 23rd Jan 2020</span>
        </h4>
        <p>Hi hello man!</p>
      </div>
    </div>
  );
};

export default Message;
