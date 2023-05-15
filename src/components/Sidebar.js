import React, { Component } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.ToggleSidebar = this.ToggleSidebar.bind(this);
  }

  ToggleSidebar() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const { toggleSidebar } = this.props;
    return (
      <>
        <div className="container-fluid mt-3">
          <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
            <div className="sd-header">
              <h4 className="mb-0">Sidebar Header</h4>
              <div className="btn btn-primary" onClick={toggleSidebar}>
                Close Sidebar
              </div>
            </div>
            <div className="sd-body">
              <ul>
                <li>
                  <Link to="/algebra-seminarski-rad/" className="sd-link">
                    Chat
                  </Link>
                </li>
                <li>
                  <Link to="/algebra-seminarski-rad/about" className="sd-link">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
            onClick={toggleSidebar}
          ></div>
        </div>
      </>
    );
  }
}

export default Sidebar;
