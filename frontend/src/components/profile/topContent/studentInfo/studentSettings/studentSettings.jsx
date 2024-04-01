import React, { useState } from "react";

function StudentSettings() {
  const [modalWindow, changeModalWindow] = useState(false);

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
              <input type="text" placeholder="Введите новое имя" />
              <input type="text" placeholder="Введите новую фамилию" />
            </div>
            <div>
              <input type="tel" placeholder="Новый номер телефона" />
            </div>
            <div className="settings-buttons">
              <button>Сменить пароль</button>
              <button>Применить</button>
              <button>Сменить почту</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default StudentSettings;
