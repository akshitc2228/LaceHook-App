import "./profile.css";
import Feed from "../../components/feed/Feed";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState([]);
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async() => {
      const res = await axios.get(`http://localhost:8080/users?username=${username}`)
      setUser(res.data)
    };
    fetchUser();
  }, [username])

  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={user.profilePicture ? PF+user.coverPicture : `${PF}/cover photos/no cover.jpg`}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={user.coverPicture ?  PF+user.profilePicture : `${PF}/Profile pics/unknown.jpg`}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDescription">
                {user.description}
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user={user} />
            {/* the word profile indicates that the component will be used in the profile page and not the default homepage */}
          </div>
        </div>
      </div>
    </>
  );
}
