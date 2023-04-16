import { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      <div className="container-fluid mt-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
          <div className="container-fluid p-2">
            <div className="form-inline ml-auto">
              <div className="btn btn-primary" onClick={ToggleSidebar}>
                <i className="fa fa-bars"></i>
              </div>
            </div>
          </div>
        </nav>
        <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
          <div className="sd-header">
            <h4 className="mb-0">Sidebar Header</h4>
            <div className="btn btn-primary" onClick={ToggleSidebar}>
              <i className="fa fa-times"></i>
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
          onClick={ToggleSidebar}
        ></div>
      </div>
    </>
  );
};
export default Sidebar;
