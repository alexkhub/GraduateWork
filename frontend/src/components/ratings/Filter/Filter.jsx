import React, { useEffect, useState } from "react";
import Discipline from "./Discipline/Discipline";
import "./Filter.css";
import axios from "axios";

function Filter() {
  const inputs = document.querySelectorAll(".discipline input");
  const ratings = document.querySelectorAll(".rating");
  const [subjects, setSubject] = useState("");
  const [isOpen, toggleOpen] = useState(true);
  const disciplines = [];

  function toggleFilters() {
    toggleOpen(!isOpen);
  }

  function clearFilters() {
    inputs.forEach((input) => (input.checked = false));
    ratings.forEach((rating) => {
      rating.style.opacity = 100;
      rating.style.display = "flex";
    });
  }

  let user = "alexkhub";
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api-student_performance/scores/${user}/`)
      .then((data) => setSubject(data.data.subjects));
  }, [user]);

  for (let i = 0; i < subjects.length; i++) {
    disciplines.push(<Discipline disciplineName = {subjects[i].subject} id = {i} key = {i} />)
  }

  return (
    <>
      <div className="subject-filter" onClick={toggleFilters}>
        <i className="fas fa-filter"></i>
      </div>
      <div
        className={
          isOpen
            ? "filters-container filters-container__unactive"
            : "filters-container filters-container__active"
        }
      >
        <div>
          <i className="fas fa-times" onClick={toggleFilters}></i>
          <p className="filters-title">Фильтры</p>
        </div>
        <div className="filters-content">
          <p className="filters-content-title">Выберите дисциплину:</p>
          <div className="disciplines">{disciplines}</div>
          <button className="clear-filter" onClick={clearFilters}>
            Сбросить фильтр
          </button>
        </div>
      </div>
    </>
  );
}

export default Filter;
