const months = [
  "January",
  "fab",
  "mar",
  "apr",
  "may",
  "jun",
  "jly",
  "aug",
  "sep",
  "October",
  "nov",
  "dec",
];

function ExpenseDate(props) {
  const month = months[props.date.getMonth()];
  const year = props.date.getFullYear();
  const date = props.date.getDate();

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{date}</div>
    </div>
  );
}
export default ExpenseDate;
