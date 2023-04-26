import React from "react";
import Slider from "./Sliders";

function ProgressTrack({ value }) {
  return (
    <div>
      <h1>Progress Tracker</h1>
      <h3>
        <Slider value={23} />
        CSS
      </h3>
      <h3>
        <Slider value={29} />
        HTML
      </h3>
      <h3>
        <Slider value={56} />
        React
      </h3>
      <h3>
        <Slider value={70} />
        JavaScript
      </h3>
    </div>
  );
}

export default ProgressTrack;