import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
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
          <div className="followedUser">
            <img src={`${PF}Profile pics/safe_user prof pic.png`} alt="" className="followedUserImg" />
            <span className="followedUserName">Shady guy</span>
          </div>
          <div className="followedUser">
            <img src={`${PF}Profile pics/Leon prof pic.jpg`} alt="" className="followedUserImg" />
            <span className="followedUserName">Leon S. Kennedy</span>
          </div>
          <div className="followedUser">
            <img src={`${PF}Profile pics/umbrella.jpg`} alt="" className="followedUserImg" />
            <span className="followedUserName">Umbrella corp.</span>
          </div>
          <div className="followedUser">
            <img src={`${PF}Profile pics/simmons.jpg`} alt="" className="followedUserImg" />
            <span className="followedUserName">Derek Simmons</span>
          </div>
          <div className="followedUser">
            <img src={`${PF}Profile pics/1.jpg`} alt="" className="followedUserImg" />
            <span className="followedUserName">Chris Redfield</span>
          </div>
          <div className="followedUser">
            <img src={`${PF}Profile pics/2.jpg`} alt="" className="followedUserImg" />
            <span className="followedUserName">Barry Burton</span>
          </div>
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
