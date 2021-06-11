import { useHistory } from "react-router";

function Header() {
  const history = useHistory();

  let logOut = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <div>
      <button>Fishy</button>
      <button onClick={() => logOut()}>Logout</button>
      <h1>Fishy</h1>
    </div>
  );
}

export default Header;
