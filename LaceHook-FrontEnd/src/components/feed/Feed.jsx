import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

/* const axiosInstance = axios.create({
  baseUrl: "http://localhost:8080/",
  headers: {
    "Content-type": "application/json",
  },
}); */

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("http://localhost:8080/posts/profile/" + username)
        : await axios.get(
            `http://localhost:8080/posts/timeline/${user._id}`
          );
      console.log(res);
      //what kind of sorting is this? How efficient
      setPosts(res.data.sort((p1,p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }));
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && < Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
