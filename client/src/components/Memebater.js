import React, { useEffect, useState } from "react";
// import "./AppStyles.module.css";

export const Memebater = () => {
  const [memebater, setMemebater] = useState([]);

  useEffect(() => {
    if(memebater.length ===0) {
    fetch("http://localhost:3000/memebater")
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
            <p>This is the memebate section</p>
            <h3>Number of likes</h3>
            <h3> Number of Dislikes</h3>
            <button onClick={console.log}>MemeBate</button>
          </div>
        </>
      );
    });
  };
  return <div>{listMemebater(memebater)}</div>;
};

export default Memebater;
