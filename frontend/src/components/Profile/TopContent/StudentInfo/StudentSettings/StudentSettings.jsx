import { useForm } from "react-hook-form";
import axios from "axios";
import React, { useState } from "react";

function StudentSettings(props) {
  const [modalWindow, changeModalWindow] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
    },
  });

  const onSubmit = (data) => {
    axios.post(``, data);
    console.log(data);
  };

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
                {...register("name")}
              />
              <input
                type="text"
                placeholder="Введите новую фамилию"
                {...register("surname")}
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
              <button onClick={handleSubmit(onSubmit)}>Применить</button>
              <button>Сменить почту</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default StudentSettings;
