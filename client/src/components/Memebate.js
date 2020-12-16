import React, { useEffect } from "react";

function Memebate({ collection }) {
  useEffect(() => {
   
  });
  const listMemebate = (collection) => {
    collection?.map((item, index) => {
      return (
        <>
          <div className="memebate">
      <div className="memename">{item.memename}</div>
            <img src={item.meme}alt="meme" />
          </div>
        </>
      );
    });
  };
  return <div>
  { listMemebate(collection)}
  </div>;
}

export default Memebate;

