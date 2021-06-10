import { useState } from "react";
import { useHistory } from "react-router";

function User() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const history = useHistory();

  function logIn(e) {
    e.preventDefault();

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((message) => {
        if (message.error) {
          setErrors(message.error);
        } else {
          localStorage.token = message.token;
          history.push("/posts");
        }
      });
  }

  return (
    <div className="form-container">
      {errors && <h1>{errors}</h1>}
      <form className="login-form" onSubmit={logIn}>
        <label>Username</label>
        <input
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default User;
