import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUpload,
  faTv,
  faClipboardList,
  faStar,
  faTrash,
  faCog,
  faBars,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = (props) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faBars}
        className="sidebar_menu"
        onClick={toggleSidebar}
      />
      <div className={`sidebar ${sidebarVisible ? "open" : ""}`}>
        <img
          src="https://www.pesuacademy.com/Academy/images/pesuimages/logoPesu.png"
          className="sidebar_img"
        ></img>
        <nav className="sidebar_items">
          <Link
            to="/home"
            className={`sidebar_item ${props.route === "home" ? "active" : ""}`}
            id="home"
          >
            <FontAwesomeIcon icon={faHome} />
            <li>Home</li>
          </Link>
          <Link
            to="/uploads"
            className={`sidebar_item ${
              props.route === "uploads" ? "active" : ""
            }`}
            id="uploads"
          >
            <FontAwesomeIcon icon={faUpload} />
            <li>Uploads</li>
          </Link>
          <Link
            to="/channels"
            className={`sidebar_item ${
              props.route === "channels" ? "active" : ""
            }`}
            id="channels"
          >
            <FontAwesomeIcon icon={faTv} />
            <li>Channels</li>
          </Link>
          <Link
            to="/logs"
            className={`sidebar_item ${props.route === "logs" ? "active" : ""}`}
            id="logs"
          >
            <FontAwesomeIcon icon={faClipboardList} />
            <li>Logs</li>
          </Link>
          <Link
            to="/starred"
            className={`sidebar_item ${
              props.route === "starred" ? "active" : ""
            }`}
            id="starred"
          >
            <FontAwesomeIcon icon={faStar} />
            <li>Starred</li>
          </Link>
          <Link
            to="/bin"
            className={`sidebar_item ${props.route === "bin" ? "active" : ""}`}
            id="bin"
          >
            <FontAwesomeIcon icon={faTrash} />
            <li>Bin</li>
          </Link>
          <Link
            to="/settings"
            className={`sidebar_item ${
              props.route === "settings" ? "active" : ""
            }`}
            id="settings"
          >
            <FontAwesomeIcon icon={faCog} />
            <li>Settings</li>
          </Link>
        </nav>
      </div>
      <FontAwesomeIcon icon={faUser} className="sidebar_user" />
    </>
  );
};

export default Sidebar;
