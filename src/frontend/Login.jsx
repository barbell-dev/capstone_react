import "./Login.css";
import background from "../assets/pesu.jpg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  function handleLogin(event) {
    event.preventDefault();
    navigate("/home");
  }
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "100vh",
          width: "100vw",
        }}
        className="login-background"
      >
        <form className="login-form" onSubmit={handleLogin}>
          <input
            name="login-username"
            placeholder="USERNAME"
            type="text"
            className="login-credentials"
          ></input>
          <br></br>
          <input
            name="login-password"
            placeholder="PASSWORD"
            type="password"
            className="login-credentials"
          ></input>
          <br></br>
          <br></br>
          <button name="login-submit-button" type="submit" className="button">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}
