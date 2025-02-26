import { useState } from "react";
import "./styles.css";

export default function App() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [formData, setFormData] = useState({ user: "", pass: "" });
  const [error, setError] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (
      username.toLowerCase() === "user" &&
      password.toLowerCase() === "password"
    ) {
      setFormData({ user: username, pass: password });
      setError(false);
    } else {
      setError(true);
    }
  }
  return (
    <div className="App">
      <h1>Login Page</h1>
      {formData.user && <div>Welcome {username}!</div>}
      {error && <p>Invalid username or password</p>}
      {!formData.user && (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              name="password"
              value={password} 
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
