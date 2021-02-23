import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Hey! how are you 😃"
        timestamp="35 minutes ago"
        profilePic="https://4.bp.blogspot.com/-eUHYCVj6AmY/TYGBGTPjNLI/AAAAAAAABwI/MIJSB6gvtz8/s1600/sarah%2Bwalker%2B6.jpg"
      />
      <Chat
        name="Ellen"
        message="Whats up ♥️?"
        timestamp="55 minutes ago"
        profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879"
      />
      <Chat
        name="Sandra"
        message="Ola!"
        timestamp="3 days ago"
        profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F0cd934b4c7b6065496ba00e1f5f826d4%2F0x0.jpg"
      />
      <Chat
        name="Natasha"
        message="Oops there is he is... 🐕"
        timestamp="1 week ago"
        profilePic="https://static.billboard.com/files/media/lady-gaga-vf-oscars-2019-xgh-billboard-1548-1024x677.jpg"
      />
    </div>
  );
}

export default Chats;
