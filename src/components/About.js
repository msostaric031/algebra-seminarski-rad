import React, { useState } from "react";
import "./About.css";
import appLogo from "../assets/img/appLogo.PNG";

function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };
  return (
    <div className="container">
      <div className="row align-items-center my-5">
        <div className="col-lg-5">
          <h1 className="font-weight-bold">About</h1>
          <p>
            This project is a seminar conducted at Algebra University, focusing
            on the development and implementation of a chat application. The
            chat application serves as a platform for users to engage in
            real-time communication and exchange messages.
          </p>
          <p>
            The seminar aims to provide practical experience in building a fully
            functional chat application using modern web technologies and
            frameworks such as React and React Router.
          </p>
        </div>
        <div className="col-lg-7">
          <img
            className="img-fluid rounded mb-4 mb-lg-0 appLogo"
            src={appLogo}
            alt="App logo"
          />
        </div>
      </div>
      <div className="row align-items-top my-5 contact-container">
        <div className="col-lg-5">
          <h1 className="font-weight-bold ">Contact</h1>
          <p>
            For any business inquiries, information or if you would like to chat
            with us, feel free to send us a message!
          </p>
        </div>
        <div className=" col-lg-7 form-container">
          <form className="contact-form">
            <div className="contact-element">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="contact-element">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="contact-element">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
