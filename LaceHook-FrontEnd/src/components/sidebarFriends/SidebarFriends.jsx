import "./sidebarFriends.css";

export default function SidebarFriends({user}) {
  return (
    <li className="sidebarFriend">
      <img
        src={user.profilePicture}
        alt=""
        className="sidebarFriendImage"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
