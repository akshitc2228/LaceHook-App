import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios"
import { format } from "timeago.js"
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [liked, setLiked] = useState(false);
  const [user, setUser] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async() => {
      const res = await axios.get(`http://localhost:8080/users?userId=${post.userId}`)
      setUser(res.data)
    };
    fetchUser();
  }, [post.userId])

  const likeHandler = () => {
    setLike(liked ? like - 1 : like + 1);
    setLiked(!liked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                src={PF+user.profilePicture || PF+"Profile pics/unknown.jpg"} //can change unknown avatar type based on the gender of the user; For now adding default
                alt=""
                className="postCreatorImage"
              />
            </Link>
            <span className="postUserName">
              {user.username}
            </span>{" "}
            {/* mapping username of different users  */}
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCentre">
          <span className="postText">{post.description}</span>
          <img src={PF+post.img} alt="" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={`${PF}like logo.png`}
              alt=""
              className="reactionButton"
              onClick={likeHandler}
            />
            <img
              src={`${PF}heart logo.png`}
              alt=""
              className="reactionButton"
              onClick={likeHandler}
            />
            <span className="likeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="commentsCounter">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
