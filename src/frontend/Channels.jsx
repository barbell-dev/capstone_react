import Sidebar from "./Sidebar";
import "./Channels.css";

export default function Channels() {
  return (
    <div>
      <Sidebar route="channels" />
      <p>Channels</p>
      <div className="file-input-container">
        <span className="file-input-label">Choose file</span>
        <label htmlFor="file-input" className="file-input-button">
          <span className="upload-icon">&#8645;</span> Upload
        </label>
        <input type="file" id="file-input" className="file-input" />
      </div>
    </div>
  );
}
