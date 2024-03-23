import './AddForm.css';

function AddFrom() {
    return (
        <>
            <form className='add-form'>
                <div>
                    <textarea placeholder="Описание задания" />
                    <input type='file' id='add-form-file-input'/>
                    <label for='add-form-file-input' >Выберите файл</label>
                </div>
                <div>
                    <select>
                        <option>-Группа-</option>
                        <option value="3-1">3-1 ИС</option>
                        <option value="4-2">4-2 ИС</option>
                        <option value="1">1 ИС</option>
                    </select>
                    <button id='send-button'>Отправить</button>
                </div>
            </form>
        </>
    )
}

export default AddFrom;