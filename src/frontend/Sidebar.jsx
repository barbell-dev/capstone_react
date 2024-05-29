import React, { useState } from "react";
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

const Sidebar = () => {
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
        <div className="sidebar_items">
          <div className="sidebar_item">
            <FontAwesomeIcon icon={faHome} />
            <p>Home</p>
          </div>
          <div className="sidebar_item">
            <FontAwesomeIcon icon={faUpload} />
            <p>Uploads</p>
          </div>
          <div className="sidebar_item">
            <FontAwesomeIcon icon={faTv} />
            <p>Channels</p>
          </div>
          <div className="sidebar_item">
            <FontAwesomeIcon icon={faClipboardList} />
            <p>Logs</p>
          </div>
          <div className="sidebar_item">
            <FontAwesomeIcon icon={faStar} />
            <p>Starred</p>
          </div>
          <div className="sidebar_item">
            <FontAwesomeIcon icon={faTrash} />
            <p>Bin</p>
          </div>
          <div className="sidebar_item">
            <FontAwesomeIcon icon={faCog} />
            <p>Settings</p>
          </div>
        </div>
      </div>
      <FontAwesomeIcon icon={faUser} className="sidebar_user" />
    </>
  );
};

export default Sidebar;
