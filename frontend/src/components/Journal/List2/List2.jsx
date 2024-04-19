function List2() {
  return (
    <div className="list2-container">
      <table>
        <tbody>
          <tr className="days">
            <td className="columns-names">
              <p>
                <span id="columns-names-days">Число</span>{" "}
              </p>
            </td>
            <td>Тип занятия</td>
            <td>Тема</td>
            <td>Д/З</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Семинар</td>
            <td>Тема</td>
            <td>Домашнее задание</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default List2;
