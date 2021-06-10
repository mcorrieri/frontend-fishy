import { useHistory } from "react-router-dom";

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
      <h2>Create account</h2>
      <form onSubmit={(e) => signUp(e)}>
        <label>Username </label>
        <input name="username" type="text" />
        <br></br>
        <label>Password </label>
        <input name="password" type="password" />
        <br></br>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Signup;
