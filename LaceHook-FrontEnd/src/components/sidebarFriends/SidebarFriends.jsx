import "./sidebarFriends.css";

export default function SidebarFriends({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img
        src={PF+user.profilePicture}
        alt=""
        className="sidebarFriendImage"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
