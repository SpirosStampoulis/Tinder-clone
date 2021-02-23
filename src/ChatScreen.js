import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";

import "./ChatScreen.css";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      user: "Sandra",
      image:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879",
      message: "Whats up ♥️?",
    },
    {
      user: "Sandra",
      image:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879",
      message: "Hows it going!",
    },
    {
      message: "Hi! How are you Ellen!",
    },
  ]);
  return (
    <div className="chatScreen">
      <div>
        <p className="chatScreen__timestamp">
          YOU MATCHED WITH ELLEN ON 10/08/20
        </p>
        {messages.map((message) =>
          message.user ? (
            <div className="chatScreen__message">
              <Avatar
                className="chatScreen__image"
                alt={message.name}
                src={message.image}
              />
              <p className="chatScreen__text">{message.message}</p>
            </div>
          ) : (
            <div className="chatScreen__message">
              <p className="chatScreen__textUser">{message.message}</p>
            </div>
          )
        )}
      </div>

      <div className="chatScreen__input">
        <form>
          <input
            className="chatScreen__inputField"
            placeholder="Type a message..."
          ></input>
          <button className="chatScreen__inputButton">SEND</button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
