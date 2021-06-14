// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import Header from "./Components/Header";
import PostPage from "./Components/PostPage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import UserInfo from "./Components/UserInfo";
import PostForm from "./Components/PostForm";
import PostInfo from "./Components/PostInfo";
import MyAquarium from "./Components/MyAquarium";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  function onLogin(userInfo) {
    setLoggedInUser(userInfo);
  }
  console.log(loggedInUser);
  useEffect(() => {
    if (localStorage.token) {
      fetch("http://localhost:3000/keep_logged_in", {
        method: "GET",
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setLoggedInUser(data);
        });
    }
  }, []);

  return (
    <div className="App">
      <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      <Switch>
        <Route exact path="/login">
          <Login onLogin={onLogin} />
        </Route>
        <Route exact path="/signup">
          <Signup onLogin={onLogin} />
        </Route>
        <Route exact path="/posts">
          <PostPage />
        </Route>
        <Route exact path="/post/:id">
          <PostInfo />
        </Route>
        <Route exact path="/userinfo">
          <UserInfo />
        </Route>
        <Route exact path="/postform">
          <PostForm />
        </Route>
        <Route exact path="/myfish">
          <MyAquarium loggedInUser={loggedInUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
