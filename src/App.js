// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useCallback } from "react";
import { Switch, Route } from "react-router";
import PostPage from "./Components/PostPage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import PostForm from "./Components/PostForm";
import PostInfo from "./Components/PostInfo";
import MyAquarium from "./Components/MyAquarium";
import Title from "./Components/Title";
import MyPosts from "./Components/MyPosts";
import EditPostForm from "./Components/EditPostForm";
import Search from "./Components/Search";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInUserFish, setLoggedInUserFish] = useState([]);
  const [loggedInUserPosts, setLoggedInUserPosts] = useState([]);

  function onLogin(userInfo) {
    setLoggedInUser(userInfo);
    setLoggedInUserPosts(userInfo.posts);
    console.log(userInfo.fish);
  }
  // console.log(loggedInUser);

  const fetchUserPosts = useCallback(() => {
    fetch("http://localhost:3000/keep_logged_in", {
      method: "GET",
      headers: {
        Authorization: localStorage.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoggedInUser(data);
        setLoggedInUserPosts(data.posts);
      });
  }, []);

  useEffect(() => {
    if (localStorage.token) {
      fetchUserPosts();
      // fetchUserFish();
    }
  }, [
    fetchUserPosts,
    //  fetchUserFish
  ]);

  // console.log(loggedInUser);

  return (
    <div className="App">
      <Title loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      <Switch>
        <Route exact path="/login">
          <Login onLogin={onLogin} />
        </Route>
        <Route exact path="/signup">
          <Signup onLogin={onLogin} />
        </Route>
        {loggedInUser ? (
          <>
            <Route exact path="/posts">
              <PostPage
                loggedInUserPosts={loggedInUserPosts}
                setLoggedInUserPosts={setLoggedInUserPosts}
                // newPost={newPost}
              />
            </Route>
            <Route exact path="/post/:id">
              <PostInfo
                loggedInUser={loggedInUser}
                fetchUserPosts={fetchUserPosts}
              />
            </Route>
            <Route exact path="/postform">
              <PostForm
                loggedInUser={loggedInUser}
                loggedInUserFish={loggedInUserFish}
                setLoggedInUserFish={setLoggedInUserFish}
                loggedInUserPosts={loggedInUserPosts}
                setLoggedInUserPosts={setLoggedInUserPosts}
                // getNewPost={getNewPost}
              />
            </Route>
            <Route exact path="/posts/:id">
              <EditPostForm
                loggedInUser={loggedInUser}
                fetchUserPosts={fetchUserPosts}
              />
            </Route>
            <Route exact path="/myfish">
              <MyAquarium
                loggedInUser={loggedInUser}
                // fetchUserFish={fetchUserFish}
              />
            </Route>
            <Route exact path="/myposts">
              <MyPosts
                loggedInUser={loggedInUser}
                loggedInUserPosts={loggedInUserPosts}
              />
            </Route>
          </>
        ) : (
          <Login onLogin={onLogin} />
        )}
        <Route exact path="/search">
          <Search />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
