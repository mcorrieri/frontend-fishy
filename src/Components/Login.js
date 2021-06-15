import { useState } from "react";
import { useHistory } from "react-router";
import { Form, Button } from "semantic-ui-react";

function Login({ onLogin }) {
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
      .then((userInfo) => {
        console.log(userInfo);
        if (userInfo.message) {
          alert(userInfo.message);
        } else {
          localStorage.token = userInfo.token;
          onLogin(userInfo);
          history.push("/posts");
        }
      });
  }

  function handleNewAccount() {
    history.push("/signup");
  }

  return (
    <div className="form-container">
      {errors && <h1>{errors}</h1>}
      <Form className="login-form" onSubmit={logIn}>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Username</label>
            <input
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Field>
        </Form.Group>
        <Button type="submit"> Submit</Button>
      </Form>
      <br></br>
      <Button onClick={handleNewAccount}>Create Fishy account</Button>
    </div>
  );
}

export default Login;
