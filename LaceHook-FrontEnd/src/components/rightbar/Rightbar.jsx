import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async() => {
      try {
        const friendsList = await axios.get(`http://localhost:8080/users/friends/${user._id}`);
        setFriends(friendsList.data)
      } catch (error) {
        console.log(error)
      }
    };
    getFriends();
  }, [user._id])

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            {" "}
            <b>Leon S. Kennedy</b> has a birthday today
          </span>
        </div>
        <h4 className="onlineFriends">Friends online</h4>
        <ul className="rightbarFriendslist">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City : </span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From : </span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship : </span>
            <span className="rightbarInfoValue">{user.relationshipStatus === 1 ? "Single" : user.relationshipStatus === 2 ? "Double" : "*Classified*"}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Followed friends</h4>
        <div className="followedUsersList">
          {friends.map((friend) => (
            <div className="followedUser">
              <img
                src={friend.profilePicture ? PF+friend.profilePicture : `${PF}Profile pics/unknown.jpg`}
                alt=""
                className="followedUserImg"
              />
              <span className="followedUserName">friend.username</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  );
}
