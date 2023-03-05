import "./online.css";

export default function Online({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbarFriend">
      <div className="friendImgContainer">
        <img src={PF + user.profilePicture} alt="" className="friendProfImg" />
        <span className="onlineStatus"></span>
      </div>
      <span className="rightbarFriendUsername">{user.username}</span>
    </li>
  );
}
