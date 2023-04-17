import React, { Component } from "react";
import "./Sidebar.css";

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
    return (
      <>
        <div className="container-fluid mt-3">
          <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
            <div className="container-fluid p-2">
              <div className="form-inline ml-auto">
                <div className="btn btn-primary" onClick={this.ToggleSidebar}>
                </div>
              </div>
            </div>
          </nav>
          <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
            <div className="sd-header">
              <h4 className="mb-0">Sidebar Header</h4>
              <div className="btn btn-primary" onClick={this.ToggleSidebar}>
              </div>
            </div>
            <div className="sd-body">
              <ul>
                <li>
                  <a href="#" className="sd-link">
                    Menu Item 1
                  </a>
                </li>
                <li>
                  <a href="#" className="sd-link">
                    Menu Item 2
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
            onClick={this.ToggleSidebar}
          ></div>
        </div>
      </>
    );
  }
}

export default Sidebar;
