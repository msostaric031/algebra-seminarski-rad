import React, { useState, forwardRef, useImperativeHandle } from "react";
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
        onClick={toggleSidebar}
      ></div>
    </div>
  );
});

export default Sidebar;
