import "./Login.css";
import background from "../assets/pesu.jpg";

export default function Login() {
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
        <form className="login-form">
          <input
            name="login-username"
            placeholder="USERNAME"
            type="text"
          ></input>
          <br></br>
          <input
            name="login-password"
            placeholder="PASSWORD"
            type="password"
          ></input>
          <br></br>
          <button name="login-submit-button" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}
