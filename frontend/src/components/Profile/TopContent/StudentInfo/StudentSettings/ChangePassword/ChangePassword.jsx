function ChangePassword(props) {
  return (
    <form
      className={`change-container__${
        props.changePasswordOpen ? "visible" : "hidden"
      }`}
    >
      <i class="fas fa-arrow-left" onClick={props.openChangePassword}></i>
      <input type="password" placeholder="Введите старый пароль" />
      <input
        type="password"
        id="new-password"
        placeholder="Введите новый пароль"
      />
      <button>Применить</button>
    </form>
  );
}

export default ChangePassword;
