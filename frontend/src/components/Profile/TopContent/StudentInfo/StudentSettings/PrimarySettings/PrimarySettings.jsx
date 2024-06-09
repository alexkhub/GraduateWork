import axios from "axios";
import { useForm } from "react-hook-form";

function PrimarySettings(props) {
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
    props.changeModalWindow(!props.modalWindow);
  };

  function deleteAccount() {
    axios.delete(
      `http://localhost:8000/api-student_performance/profile/${props.userSlug}/`
    );
  }

  return (
    <div className="primary-settings-container">
      <form
        className={`settings-form__${
          props.primarySettingsOpen ? "visible" : "hidden"
        }`}
      >
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
          <button type="button" onClick={props.openChangePassword}>
            Сменить пароль
          </button>
          <button onClick={handleSubmit(onSubmit)}>Применить</button>
          <button type="button" onClick={props.openChangeEmail}>
            Сменить почту
          </button>
          <button onClick={deleteAccount} className="delete-account-button">Удалить</button>
        </div>
      </form>
    </div>
  );
}

export default PrimarySettings;
