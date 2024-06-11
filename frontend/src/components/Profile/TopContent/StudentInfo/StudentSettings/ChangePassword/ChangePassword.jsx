import { useState } from "react";

function ChangePassword(props) {
  const [newPassword, setNewPassword] = useState();
  const [repeatNewPassword, setRepeatNewPassword] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();

  function validateNewPassword(e) {
    setRepeatNewPassword(e.target.value);
    if (e.target.value === newPassword && e.target.value !== null) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  }

  function changePassword() {
    setNewPassword("");
    setRepeatNewPassword("");
  }

  return (
    <form
      className={`change-container__${
        props.changePasswordOpen ? "visible" : "hidden"
      }`}
    >
      <i className="fas fa-arrow-left" onClick={props.openChangePassword}></i>
      <input
        type="password"
        placeholder="Введите новый пароль"
        value={newPassword}
        onInput={(e) => setNewPassword(e.target.value)}
      />
      <input
        className={`new-password__${passwordIsValid ? "valid" : "invalid"}`}
        type="password"
        id="new-password"
        value={repeatNewPassword}
        placeholder="Повторите новый пароль"
        onInput={validateNewPassword}
      />
      <button
        onClick={changePassword}
        type="button"
        className={`password-submit-button button__${
          passwordIsValid ? "visible" : "hidden"
        }`}
      >
        Применить
      </button>
    </form>
  );
}

export default ChangePassword;
