import React, { useState, useEffect } from "react";
import axios from "axios";
import SliderItem from "./SliderItem/SliderItem";

function LastTasks(props) {
  const [sliderItemsData, setSliderItemsData] = useState("");
  const sliderItems = [];
  
  const questsEndpoint = `http://localhost:8000/api-student_performance/profile/${props.userSlug}/`;
  useEffect(() => {
    axios
      .get(questsEndpoint)
      .then((data) => setSliderItemsData(data.data.quests));
  }, [questsEndpoint]);

  for (let i = 0; i < sliderItemsData.length; i++) {
    sliderItems.push(
      <SliderItem
        // teacherName={sliderItemsData[i].lecturer.user}
        subjectName={sliderItemsData[i].subject}
        taskDate={sliderItemsData[i].date_added}
        taskStatus={true}
        key={i}
      />
    );
  }

  // Slider logic
  const sliderLineItems = document.querySelectorAll(".last-tasks-item");
  let maxOffset = sliderLineItems.length * 330 - 4 * 330;

  let [left, leftOffset] = useState(20);

  function offsetSliderLeft() {
    left -= 330;
    if (left < -maxOffset) {
      left = 0;
    }
    leftOffset(left);
  }

  function offsetSliderRight() {
    left += 300;
    if (left > 0) {
      left = 20;
    }
    leftOffset(left);
  }

  return (
    <div className="last-tasks">
      <p className="last-tasks-title">Последние задания</p>
      <i onClick={offsetSliderRight} className="fas fa-chevron-left"></i>
      <div style={{ left: left }} className="last-tasks-slider-line">
        {sliderItems}
      </div>
      <i onClick={offsetSliderLeft} className="fas fa-chevron-right"></i>
    </div>
  );
}

export default LastTasks;
