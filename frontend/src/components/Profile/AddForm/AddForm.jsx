function AddFrom() {
  return (
    <>
      <form className="add-form">
        <div className="add-form-container">
          <div>
            <input
              type="text"
              className="add-task-name"
              placeholder="Название задания"
            />
            <input
              type="text"
              className="add-task-description"
              placeholder="Описание задания"
            />
          </div>
          <div>
            <select>
              <option>Выберите группу</option>
              <option value="3-1">3-1 ИС</option>
              <option value="4-2">4-2 ИС</option>
              <option value="1">1 ИС</option>
            </select>
            <select name="" id="">
              <option value="">Выберите дисциплину</option>
              <option value="python">Python</option>
            </select>
          </div>
          <input type="file" id="add-form-file-input" />
          <label htmlFor="add-form-file-input">Выберите файл</label>
          <button id="send-button">Отправить</button>
        </div>
      </form>
    </>
  );
}

export default AddFrom;
