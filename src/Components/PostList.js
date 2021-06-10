import React from "react";
import PostCard from "./PostCard";

function PostList({ posts }) {
  console.log(posts);
  let postCards = posts.map((post) => {
    return <PostCard key={post.id} post={post} />;
  });
  return <ul>{postCards}</ul>;
}
export default PostList;
