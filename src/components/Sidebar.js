import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // expose the toggleSidebar function via ref
  useImperativeHandle(ref, () => ({
    toggleSidebar,
  }));

  return (
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
              <Link className="sd-link" to="/">
                Chat
              </Link>
            </li>
            <li>
              <Link className="sd-link" to="/about">
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
  );
});

export default Sidebar;
