import "./App.css";
import { useState } from "react";

function Slider({ value }) {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div>
      <input
        type="range"
        min="1"
        max="100"
        value={sliderValue}
        className="slider"
        id="myRange"
        onChange={handleSliderChange}
      />
    </div>
  );
}

export default Slider;
