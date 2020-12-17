// import React, { useEffect } from "react";

// export const Memebater = () => {
//   const [memebater, setMemebater] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:4041/memebater")
//       .then((response) => response.json())
//       .then((data) => {
//         setMemebater([...memebater, ...data]);
//       })
//       .catch(console.error);
//   }, [Memebater]);

//   const listMemebater = (collection) => {
//     collection?.map((item, index) => {
//       return (
//         <>
//           <div className="memebater">
//             <div className="memename">{item.memename}</div>
//             <img src={item.meme} alt="meme" />
//             <button>A button!</button>
//           </div>
//         </>
//       );
//     });
//   };
//   return <div>{listMemebater(collection)}</div>;
// };

// export default Memebater;
