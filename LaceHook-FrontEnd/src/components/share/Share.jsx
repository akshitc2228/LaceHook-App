import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

export default function Share() {
  return (
    <div className="shareContainer">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/Profile pics/ada prof pic.jpg"
            alt=""
            className="profileImg"
          />
          <input placeholder="What's on your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="black" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="orange" className="shareIcon" />
              <span className="shareOptionText">Tag someone</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Add a Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Share how you feel</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
