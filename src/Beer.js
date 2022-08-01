import React, { Component, useState } from "react";

export function Beer(props) {
  const [isLiked, setIsLiked] = useState(false);
  // console.log(isLiked)
  function selectButton() {
    setIsLiked(!isLiked);
    console.log(isLiked);

    //   let btnSelect = document.querySelector(`${props.key}`);

    //   btnSelect.addEventListener(
    //     "click",
    //     () => (btnSelect.style.backgroundColor = "pink")
    //   );
  }
  return (
    <li className="card">
      <h3>{props.name}</h3>
      <img className="image" src={props.image} alt={props.name} />
      <button
        onClick={selectButton}
        style={
          isLiked
            ? { backgroundColor: "#750448", color: "white" }
            : { backgroundColor: "lightgrey" }
        }
      >
        {isLiked ? "Liked" : "Like"}
      </button>
    </li>
  );
}

export default Beer;

// import React, { useState } from "react";
// import Heart from "react-animated-heart";

// export default function App() {
//   const [isClick, setClick] = useState(false);
//   return (
//     <div className="App">
//       <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
//     </div>
//   );
// }
