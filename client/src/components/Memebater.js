import React, { useEffect, useState } from "react";
import "./ProfileStyles.css";
import { Meme } from "./Meme";

export const Memebater = () => {
  const [memebater, setMemebater] = useState([]);

  useEffect(() => {
    if(memebater.length ===0) {
    fetch("/memebater")
      .then((response) => response.json())
      .then((data) => {
        setMemebater([...memebater, ...data]);
      })
      .catch(console.error);
    }
  }, [Memebater]);

  const listMemebater = (memebater) => {
    memebater?.map((item, index) => {
      return (
        <>
          <div className="memebater">
            <h3>Name</h3>
            <p>Membates</p>
            <h3>likes</h3>
            <h3>Dislikes</h3>
            <image>Meme</image>
            <button onClick={console.log}>Meme</button>
          </div>
        </>
      );
    });
  };
  return <div>{listMemebater(memebater)}</div>;
};

export default Memebater;
