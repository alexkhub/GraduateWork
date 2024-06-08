import { useForm } from "react-hook-form";
import axios from "axios";
import React, { useState } from "react";

function StudentSettings(props) {
  const [modalWindow, changeModalWindow] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
    },
  });

  const onSubmit = (data) => {
    axios.patch(
      `http://localhost:8000/api-student_performance/profile/${props.userSlug}/`,
      data
    );
    console.log(data);
    changeModalWindow(!modalWindow);
  };

  function deleteAccount() {
    axios.delete(
      `http://localhost:8000/api-student_performance/profile/${props.userSlug}/`
    );
  }

  function openModalWindow() {
    changeModalWindow(!modalWindow);
  }

  return (
    <>
      <i onClick={openModalWindow} className="fas fa-cogs"></i>
      <div
        className={
          modalWindow
            ? "student-settings-background__show"
            : "   student-settings-background__hidden"
        }
      >
        <div className="student-settings">
          <i onClick={openModalWindow} className="fas fa-times"></i>
          <p>Настройки</p>
          <form className="settings-form">
            <div>
              <input
                type="text"
                placeholder="Введите новое имя"
                {...register("first_name")}
              />
              <input
                type="text"
                placeholder="Введите новую фамилию"
                {...register("last_name")}
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Новый номер телефона"
                {...register("phone")}
              />
            </div>
            <div className="settings-buttons">
              <button>Сменить пароль</button>
              <button type="submit" onClick={handleSubmit(onSubmit)}>
                Применить
              </button>
              <button>Сменить почту</button>
              <button onClick={deleteAccount}>Удалить</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default StudentSettings;
