import "./profile.css";
import Feed from "../../components/feed/Feed";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@mui/icons-material";
import { FollowContext } from "../../context/FollowContext";
import { followUserCall, unfollowUserCall } from "../../apiCalls";

//NOTE AND ALSO TODO: The initial list of users followed by the currUser will always be empty initially
//as that is how the context ha been setup; Rework is requied for correct context setup
//Right now thre'll always be one spare and unnecessary follow request;

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState([]);
  const username = useParams().username;

  const { user: currUser } = useContext(AuthContext);
  /*  const {followedUsers, dispatch} = useContext(FollowContext); */

  const [followedUser, setFollowedUser] = useState(
    currUser.following.includes(user?._id)
  );

  console.log(currUser.following);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:8080/users?username=${username}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  useEffect(() => {
    //need to check first if the user is already being followed
    setFollowedUser(currUser.following.includes(user?.id));
  }, [currUser, user.id]);

  const handleClick = async () => {
    try {
      if (followedUser) {
        console.log("unfollow this user");
        await axios.put(`http://localhost:8080/users/${user._id}/unfollow`, {
          userId: currUser._id,
        });

        dispatchEvent({ type: "UNFOLLOW", payload: user._id });

        console.log(followedUser);
        console.log(currUser.following);
      } else {
        console.log("follow this user");
        axios.put(`http://localhost:8080/users/${user._id}/follow`, {
          userId: currUser._id,
        });

        dispatchEvent({ type: "FOLLOW", payload: user._id });

        console.log(followedUser);
        console.log(currUser.following);
      }
    } catch (error) {
      console.log(error);
    }

    setFollowedUser(!followedUser);
  };

  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : `${PF}/cover photos/no cover.jpg`
                }
                alt=""
                className="profileCoverImg"
              />
              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : `${PF}/Profile pics/unknown.jpg`
                }
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDescription">{user.description}</span>

              {user.username !== currUser.username && (
                <button className="followUserButton" onClick={handleClick}>
                  {!followedUser ? (
                    <>
                      <Add /> Follow {username} on LaceHook
                    </>
                  ) : (
                    <>
                      <Remove /> Unfollow {username}
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
            {/* the word profile indicates that the component will be used in the profile page and not the default homepage */}
          </div>
        </div>
      </div>
    </>
  );
}
