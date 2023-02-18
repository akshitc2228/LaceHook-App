import "./navbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="appLogo">LaceHook</span>
      </div>

      <div className="navbarCentre">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="See who you're lookin' for"
            className="searchInput"
          />
        </div>
      </div>

      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink">Homepage</span>
          <span className="navbarLink">Timeline</span>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconsItems">
            <Person />
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconsItems">
            <Chat />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconsItems">
            <Notifications />
            <span className="navbarIconBadge">1</span>
          </div>
        </div>
        <img
          src="/assets/Profile pics/ada prof pic.jpg"
          alt=""
          className="profilePic"
        />
      </div>
    </div>
  );
}
