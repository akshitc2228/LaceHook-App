import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";

/* const axiosInstance = axios.create({
  baseUrl: "http://localhost:8080/",
  headers: {
    "Content-type": "application/json",
  },
}); */

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "http://localhost:8080/posts/timeline/636833cee53db900799bedd4"
      );
      console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
