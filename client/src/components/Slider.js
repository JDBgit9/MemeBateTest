import React from "react";
import { Media } from "./Home";
import Memebater from "./Memebater";


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
