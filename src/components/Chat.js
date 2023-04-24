import { Component } from "react";
import "./Chat.css";
import Messages from "./Messages";
import Input from "./Input";
import Sidebar from "./Sidebar";

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

class Chat extends Component {
  toggleSidebar = () => {
    this.sidebar.ToggleSidebar();
  };

  state = {
    messages: [],
    member: {
      username: this.props.username,
      color: randomColor(),
    },
  };

  constructor(props) {
    super(props);
    this.drone = new window.Scaledrone("9saolsjKeqgn4HwV", {
      data: this.state.member,
    });
    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });
    const room = this.drone.subscribe("observable-room");
    room.on("data", (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <button onClick={this.toggleSidebar} className="sidebar-btn">
            Sidebar
          </button>
          <h1>{this.props.username}'s Chat App</h1>
          <div></div>
        </div>
        <Sidebar
          ref={(sidebar) => (this.sidebar = sidebar)}
          toggleSidebar={this.toggleSidebar}
          username={this.props.username}
        />
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input onSendMessage={this.onSendMessage} />
      </div>
    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message,
    });
  };
}

export default Chat;
