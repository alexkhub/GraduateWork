import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Lesson(props) {
  const [pairType, setPairType] = useState(props.pairType);
  const [theme, setTheme] = useState(props.theme);
  const [homework, setHomework] = useState(props.homework);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      "type_of_lesson": "",
      "student_scores": [],
      "lesson_topic": "",
      "lesson_number": props.pairNumber,
    },
  });

  const onSubmit = (data) => {
    axios.patch(
      `http://localhost:8000/api-timetable/lesson/${props.id}/`,
      data
    );
    console.log(data);
  };

  return (
    <>
      <tr>
        <td>{props.pairNumber}</td>
        <td>{props.date}</td>
        <td>
          {!props.isStaff ? (
            <input
              type="text"
              value={pairType}
              onInput={(e) => setPairType(e.target.value)}
              {...register("type_of_lesson")}
            />
          ) : (
            pairType
          )}
        </td>
        <td>
          {!props.isStaff ? (
            <input
              type="text"
              value={theme}
              onInput={(e) => setTheme(e.target.value)}
              {...register("lesson_topic")}
            />
          ) : (
            theme
          )}
        </td>
        <td>
          {!props.isStaff ? (
            <input
              type="text"
              value={homework}
              onInput={(e) => setHomework(e.target.value)}
              // {...register("quest")}
            />
          ) : (
            homework
          )}
        </td>
        <button onClick={handleSubmit(onSubmit)}>
          <i className="fas fa-check"></i>
        </button>
      </tr>
    </>
  );
}

export default Lesson;
