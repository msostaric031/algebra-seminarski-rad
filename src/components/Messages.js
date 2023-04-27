import {Component} from "react";
import React from "react";

class Messages extends Component {
  generateRan() {
    var max = 20;
    var random = [];
    for (var i = 0; i < max; i++) {
      var temp = Math.floor(Math.random() * max);
      if (random.indexOf(temp) === -1) {
        random.push(temp);
      } else i--;
    }
    return random;
  }
  render() {
    const {messages} = this.props;
    return (
      <ul className="Messages-list">
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }

  renderMessage(message) {
    const {member, text} = message;
    const {currentMember} = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ?
      "Messages-message currentMember" : "Messages-message";
    return (
      <li className={className} key={this.generateRan()}  >
      <span
        className="avatar"
        style={{backgroundColor: member.clientData.color}}
      />
        <div className="Message-content">
          <div className="username">
            {member.clientData.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }
}

export default Messages;
