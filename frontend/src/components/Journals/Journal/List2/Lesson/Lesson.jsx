function Lesson(props) {
  return (
    <tr>
      <td>{props.pairNumber}</td>
      <td>{props.date}</td>
      <td>{props.pairType}</td>
      <td>{props.theme}</td>
      <td>{props.homework}</td>
    </tr>
  );
}

export default Lesson;
