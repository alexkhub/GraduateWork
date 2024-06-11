function ChangeEmail(props) {
  return (
    <form className={`change-container__${props.changeEmailOpen ? 'visible' : 'hidden'}`}>
      <i className="fas fa-arrow-left" onClick={props.openChangeEmail}></i>
      <input type="email" name="" id="" placeholder="Введите новый email" />
      <button className="new-email-button">Применить</button>
    </form>
  );
}

export default ChangeEmail;
