import { useState } from "react";
import "./style.css";

function Slider(props) {
  const [sliderValue, setSliderValue] = useState(props.value);

  // const handleSliderChange = (event) => {
  //   setSliderValue(event.target.value);
  // };

  let bgChange;
  if (sliderValue < 45) {
    bgChange = "red";
  } else if (sliderValue < 65) {
    bgChange = "yellow";
  } else {
    bgChange = "green";
  }

  return (
    <div className="slidecontainer">
      <input
        className="slider"
        type="range"
        min="1"
        max="100"
        value={sliderValue}
        // onChange={handleSliderChange}
        style={{
          background: `linear-gradient(to right, ${bgChange} ${sliderValue}%, #ddd ${sliderValue}%, #ddd)`,
        }}
      />
    </div>
  );
}

export default Slider;