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
    <div className="form-container">
      <Form className="login-form" onSubmit={(e) => signUp(e)}>
        <h2>Create Fishy account</h2>
        <Form.Field>
          <label>Username </label>
          <input name="username" type="text" />
        </Form.Field>
        <Form.Field>
          <label>Password </label>
          <input name="password" type="password" />
        </Form.Field>
        <Button type="submit"> Submit</Button>
        {/* <Message
          success
          header="Login Completed"
          content="You're all logged in!"
        /> */}
      </Form>
    </div>
  );
}

export default Signup;
