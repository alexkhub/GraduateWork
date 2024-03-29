import React, { useState, useEffect } from "react";
import Rating from "./Rating/Rating";
import Filter from "./Filter/Filter";
import axios from "axios";

function Ratings() {
  const [ratingData, setRating] = useState("");
  const ratings = [];

  let user = "alexkhub";
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api-student_performance/scores/${user}/`)
      .then((data) => setRating(data.data.measurable_types_control));
  }, [user]);

  for (let i = 0; i < ratingData.length; i++) {
    ratingData[i].lecturer.user = ratingData[i].lecturer.user
      .replace("-", " ")
      .replace("_", " ");

    ratings.push(
      <Rating
        subjectName={ratingData[i].subject}
        lecturer={ratingData[i].lecturer.user}
        score={ratingData[i].points}
        date={ratingData[i].date}
        key={ratingData[i].id}
      />
    );
  }
  return (
    <>
      <div className="rating-content">
        <Filter key="1" />
        <div className="ratings">{ratings}</div>
      </div>
    </>
  );
}

export default Ratings;
