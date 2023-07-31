import { useContext, useRef, useState } from "react";
import "./share.css";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { uploadImage } from "../../utility functions/uploadImage";

export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [file, setFile] = useState(null); //Right now this just uploads one file but I wanna upload multiple
  const desc = useRef();

  /*   const uploadImage = () => {
    if(file == null) return;
    const imageRef = ref(storage, `post images/${user._id}/${file.name + v4()}`); //this creates the reference for the image you want to upload
    //now to upload the image itself
    uploadBytes(imageRef, file).then(() => {
      alert("Image uloaded successfully");
    })
  } 
  
  const submitHandler = async(e) => {
    e.preventDefault();
    uploadImage();

    const newPost = {
      userId: user._id,
      description: description.current.value,
      img: ""//send image ref from firebase to this image property
    }

    try {
      await axios.post("http://localhost:8080/posts", newPost);
    } catch (error) {
      console.log(error)
    }
  } */

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const imgURL = await uploadImage(file, `post images/${user.username}`); // Get the image download URL
      const newPost = {
        userId: user._id,
        description: desc.current.value,
        img: imgURL, // Set the download URL in the newPost object
      };

      await axios.post("http://localhost:8080/posts", newPost);
      alert("Post uploaded successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Error uploading post");
    }
  };

  return (
    <div className="shareContainer">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : `${PF}/Profile pics/unknown.jpg`
            }
            alt=""
            className="profileImg"
          />
          <textarea
            type="text"
            ref={desc}
            placeholder={`What's on your mind ${user.username}?`}
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <>
            <Cancel className="cancelImgUpload" onClick={() => setFile(null)} />
            <div className="shareImgPreviewContainer">
              <img
                src={URL.createObjectURL(file)}
                alt=""
                className="imgPreview"
              ></img>
            </div>
          </>
        )}

        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="black" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png, .jpg, .jpeg, .gif, .webp"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
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
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
