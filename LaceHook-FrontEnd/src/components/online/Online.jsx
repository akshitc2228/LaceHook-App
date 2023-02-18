import "./online.css";

export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="friendImgContainer">
        <img
          src={user.profilePicture}
          alt=""
          className="friendProfImg"
        />
        <span className="onlineStatus"></span>
      </div>
      <span className="rightbarFriendUsername">{user.username}</span>
    </li>
  );
}
