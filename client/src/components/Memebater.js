import React, { useEffect, useState } from "react";

export const Memebater = () => {
  const [memebater, setMemebater] = useState([]);

  useEffect(() => {
    if(memebater.length ===0) {
    fetch("http://localhost:4041/memebater")
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
            <div className="memename">{item.memename}</div>
            <img src={item.meme} alt="meme" />
            <button>A button!</button>
          </div>
        </>
      );
    });
  };
  return <div>{listMemebater(memebater)}</div>;
};

export default Memebater;
