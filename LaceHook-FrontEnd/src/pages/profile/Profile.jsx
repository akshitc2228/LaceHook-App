import "./profile.css";
import Feed from "../../components/feed/Feed";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/posts/ada cover.jpg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="assets/Profile pics/ada prof pic.jpg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Ada Wong</h4>
              <span className="profileInfoDescription">If it ain't Wong, it's wrong</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/> {/* the word profile indicates that the component will be used in the profile page and not the default homepage */}
          </div>
        </div>
      </div>
    </>
  );
}
