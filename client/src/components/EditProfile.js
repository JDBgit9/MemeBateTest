import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./ProfileStyles.css";
import axios from "axios";
import Memebater from "./Memebater"


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
      .post('http://localhost:4041/media', request)
      .then(response => {
        // The response of the post will be an Ok (ack)
      })
      .catch(console.error)
  };

  return (
    isAuthenticated && (
      <div 
        stlyle={{
          display: "flex",
          justifyContent: "space-around",
          background: "green",
          margin: "18px 50px",
        }}
      >

        <div className="profile_left">
          <h1 className={`${className} font-xl`}>Memebate</h1>
          <h2>Profile page</h2>
          <p>{user.name}</p>
          <p className={`${className} font-md`}>
            Congratulations you have 100 points!
          </p>
          <img
            style={{ width: "160px", height: "160", borderRadius: "80px" }}
            src="https://imagery.zoogletools.com/u/166069/dc6cfc08abcd4c18efea413f74383db421beea8d/350w/05dbb3ff-b33b-4db1-8559-438a79af7f35.jpeg"
          />
          <p>{user.email}</p>
          <h3>Let's get started</h3>
        </div>

        <div
          style={{
            width: "15%",
            height: "90%",
            margin: "2rem",
            border: "2px solid black",
            background: "blue",
            padding: "1rem",
          }}
          className="profile_right"
        >
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
        <div>
        <div className="memebater">
            <p>This is the memebate section</p>
            <h3>Number of likes</h3>
            <h3> Number of Dislikes</h3>
            <button onClick={console.log}>MemeBate</button>
          </div>
        </div>
      </div>
    )
  );
}

export default EditProfile;
