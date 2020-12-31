import React from "react";
import { Media } from "./Media";


function Slider() {
  return (
    <div class="carousel-item">
      <Media />
      <div class="carousel-caption d-none d-md-block">
        <h5>...</h5>
        <p>...</p>
      </div>
    </div>
  );
}

export default Slider;
