import { useHistory } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";

function Signup() {
  const history = useHistory();

  function signUp(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value,
      }),
    })
      .then((res) => res.json())
      .then((newUser) => {
        console.log(newUser);
        history.push("/login");
      });
  }

  return (
    <div className="signup-form">
      <Form onSubmit={(e) => signUp(e)}>
        <h2>Create account</h2>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Username </label>
            <input name="username" type="text" />
          </Form.Field>
          <Form.Field>
            <label>Password </label>
            <input name="password" type="password" />
          </Form.Field>
        </Form.Group>
        <Button type="submit"> Submit</Button>
      </Form>
    </div>
  );
}

export default Signup;
