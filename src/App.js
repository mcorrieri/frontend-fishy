// import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router";
import Header from "./Components/Header";
import PostContainer from "./Components/PostContainer";
import User from "./Components/User";
import PostCard from "./Components/PostCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/login">
          <User />
        </Route>
        <Route exact path="/posts">
          <PostContainer />
        </Route>
        <Route exact path="/postinfo">
          <PostCard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
