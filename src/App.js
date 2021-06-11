// import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router";
import Header from "./Components/Header";
import PostPage from "./Components/PostPage";
import Login from "./Components/Login";
import PostCard from "./Components/PostCard";
import Signup from "./Components/Signup";
import UserInfo from "./Components/UserInfo";
import PostForm from "./Components/PostForm";
import PostInfo from "./Components/PostInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/posts">
          <PostPage />
        </Route>
        <Route exact path="/postinfo/:id">
          <PostInfo />
        </Route>
        <Route exact path="/userinfo">
          <UserInfo />
        </Route>
        <Route exact path="/postform">
          <PostForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
