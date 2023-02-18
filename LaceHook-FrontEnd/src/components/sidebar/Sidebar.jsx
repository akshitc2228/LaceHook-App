import "./sidebar.css"
import {RssFeed, Chat, PlayCircle, Group, Event, SportsEsports, Bookmark} from "@mui/icons-material"
import {Users} from "../../dummyData"
import SidebarFriends from "../sidebarFriends/SidebarFriends";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
              <RssFeed className="sidebarIcon"/>
              <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
              <Group className="sidebarIcon"/>
              <span className="sidebarListItemText">Friends</span>
          </li>
          <li className="sidebarListItem">
              <Chat className="sidebarIcon"/>
              <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
              <PlayCircle className="sidebarIcon"/>
              <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
              <Event className="sidebarIcon"/>
              <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
              <SportsEsports className="sidebarIcon"/>
              <span className="sidebarListItemText">Games</span>
          </li>
          <li className="sidebarListItem">
              <Bookmark className="sidebarIcon"/>
              <span className="sidebarListItemText">Bookmarks</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendsList">
          {Users.map(u => (
            <SidebarFriends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}
