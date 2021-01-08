import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./ProfileStyles.css";
import axios from "axios";
import { Memebater } from "./Memebater"
import { Meme }  from "./Meme";
import Posts from "./Posts";

function EditProfile(props) {
  let className = props.primary ? "primary" : "";
  const { user, isAuthenticated } = useAuth0();
  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [category, setCategory] = useState("");
  const [format, setFormat] = useState("");
  const [source1, setSource1] = useState("");
  const [source2, setSource2] = useState("");
  const [source3, setSource3] = useState("");
  const [debate, setDebate] = useState("");

  console.log(title);

  const handleSubmit = event => {

    let request = {
      debate,
      title,
      synopsis,
      category,
      format,
      source1,
      source2,
      source3,
    };

    const res = axios
      .post('/media', request)
      .then(response => {
     console.log(response)
     clearform()
     alert("media uploaded")
      })
      .catch(console.error)
  };
  const clearform=()=> {
    setDebate("");
    setTitle("");
    setSynopsis("");
    setCategory("");
    setFormat("");
    setSource1("");
    setSource2("");
    setSource3("");
  }  

  return (
    isAuthenticated && (
      <div className="profile"
        stlyle={{
          display: "flex",
          justifyContent: "space-around",
          background: "green",
          margin: "18px 50px"
        }}
      >

        <div className="profile_left">
          <h1 className={`${className} font-xl`}>Memebers</h1>
          <h2></h2>
          <p className="points">
            Congratulations you have 100 points!
          </p>
          <img
            style={{ width: "160px", height: "160", borderRadius: "80px" }}
            src="https://imagery.zoogletools.com/u/166069/dc6cfc08abcd4c18efea413f74383db421beea8d/350w/05dbb3ff-b33b-4db1-8559-438a79af7f35.jpeg"
          />
          <p>{user.email}</p>
          <h3>Begin Debate</h3>
          <div className="form">
          <select
            value={category}
            defaultValue=""
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select Catergory
            </option>
            <option value="Anime">Anime</option>
            <option value="Coding">Coding</option>
            <option value="Culture">Culture</option>
            <option value="Education">Education</option>
            <option value="Fashion">Fashion</option>
            <option value="Financial">Financial</option>
            <option value="Gaming">Gaming</option>
            <option value="History">History</option>
            <option value="Kamakazi">Kamakazi</option>
            <option value="Medicine">Medicine</option>
            <option value="Music">Music</option>
            <option value="News">News</option>
            <option value="Opinion">Opinion</option>
            <option value="Politics">Politics</option>
            <option value="Random">Random</option>
            <option value="Religion">Religion</option>
            <option value="Science">Science</option>
            <option value="Speed">Speed</option>
            <option value="Sports">Sports</option>
            <option value="Tecnology">Technology</option>
            <option value="Questions">Questions</option>
          </select>
          <select value={format} onChange={(e) => setFormat(e.target.value)}>
            <option value="" selected disabled>
              Select Format
            </option>
            <option value="Open">Open Debate</option>
            <option value="Closed">Closed Debate</option>
            <option value="Moderated">Moderated</option>
            <option value="Formal">Formal</option>
            <option value="Live">Live</option>
          </select>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Debate Url"
            value={debate}
            onChange={(e) => setDebate(e.target.value)}
          />
          <textarea
            placeholder="Enter Synopsis"
            onChange={(e) => setSynopsis(e.target.value)}
            value={synopsis}
          ></textarea>
          <input
            type="text"
            placeholder="Enter Supporting Url"
            value={source1}
            onChange={(e) => setSource1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Supporting Url"
            value={source2}
            onChange={(e) => setSource2(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Supporting Url"
            value={source3}
            onChange={(e) => setSource3(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
     
        <div className="profile_right">
        <div className="memebater">
            <p>Memebates</p>
            <h4>likes</h4>
            <h4>Dislikes</h4>
            <image>Meme</image>
            <button onClick={console.log}>MemeBate</button>
          </div>
          <Posts />
        </div>
      </div>
    )
  );
}

export default EditProfile;
