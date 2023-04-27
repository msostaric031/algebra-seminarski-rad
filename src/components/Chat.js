import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import Messages from "./Messages";
import Input from "./Input";
import Sidebar from "./Sidebar";

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

const Chat = (props) => {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({
    username: props.username,
    color: randomColor(),
  });
  const [drone, setDrone] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const newDrone = new window.Scaledrone("9saolsjKeqgn4HwV", {
      data: member,
    });
    setDrone(newDrone);

    newDrone.on("open", (error) => {
      if (error) {
        console.error(error);
        return;
      }
      const newMember = { ...member };
      newMember.id = newDrone.clientId;
      setMember(newMember);
      setIsConnected(true);
    });

    newDrone.on("close", (event) => {
      console.log("Connection closed", event);
      setIsConnected(false);
    });

    const room = newDrone.subscribe("observable-room");
    room.on("data", (data, member) => {
      setMessages((prevMessages) => [...prevMessages, { member, text: data }]);
    });
  }, []);

  const onSendMessage = (message) => {
    if (drone && isConnected) {
      drone.publish({
        room: "observable-room",
        message,
      });
    } else {
      console.log("Connection closed, retrying message publication...");
      setTimeout(() => onSendMessage(message), 1000);
    }
  };

  const sidebarRef = useRef();

  const toggleSidebar = () => {
    sidebarRef.current.toggleSidebar();
  };

  return (
    <div className="App">
      <div className="App-header">
        <button onClick={toggleSidebar} className="sidebar-btn">
          Sidebar
        </button>
        <h1>{props.username}'s Chat App</h1>
        <div></div>
      </div>
      <Sidebar
        ref={sidebarRef}
        toggleSidebar={toggleSidebar}
        username={props.username}
      />
      <Messages messages={messages} currentMember={member} />
      <Input onSendMessage={onSendMessage} />
    </div>
  );
};

export default Chat;
