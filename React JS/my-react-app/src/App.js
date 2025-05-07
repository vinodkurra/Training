import "./App.css";
import Login from "./login";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";

function App() {
  const cookies = new Cookies();
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <div className="App">
      Hi I am React
      <div> {token ? "Logged in" : "Not logged in"}</div>
      {!token && <Login />}
      {token && (
        <div>
          <button
            onClick={() => {
              cookies.remove("token", { path: "/" });
              setToken("");
            }}
          >
            Logout
          </button>
          <h1>Token</h1>
          <p>{token}</p>
        </div>
      )}
    </div>
  );
}

export default App;
