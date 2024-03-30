import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from './Rating/Rating';
import Filter from "./Filter/Filter";

function Ratings() {
  const [ratingData, setRating] = useState("");
  const ratings = [];

  let user = "alexkhub";
  let ratingsEndpoint = `http://127.0.0.1:8000/api-student_performance/scores/${user}/`;
  useEffect(() => {
    axios
      .get(ratingsEndpoint)
      .then((data) => setRating(data.data.measurable_types_control));
  }, [user, ratingsEndpoint]);

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
