import { useState } from "react";
import { useForm } from "react-hook-form";

function Lesson(props) {
  const [pairType, setPairType] = useState(props.pairType);
  const [theme, setTheme] = useState(props.theme);
  const [homework, setHomework] = useState(props.homework);
  
  const { register, handleSubmit } = useForm({
    defaultValues: {
      pairType: "",
      theme: "",
      homework: "",
      pairNumber: props.pairNumber,
      group: "4IS",
    },
  });

  const onSubmit = (data) => {
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
              {...register("pairType")}
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
              {...register("theme")}
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
              {...register("homework")}
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
