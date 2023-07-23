import "./navbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="appLogo">LaceHook</span>
        </Link>
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
            <span className="navbarIconBadge">3</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={user.profilePicture ? PF+user.profilePicture : `${PF}/Profile pics/unknown.jpg`}
            alt=""
            className="profilePic"
          />
        </Link>
      </div>
    </div>
  );
}
