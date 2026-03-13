import "./ExpenseItem.css"
const months = [
  'January',
  'fab',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec'
];

function ExpenseItem(props) {
  const month = months[props.date.getMonth()];
  const year = props.date.getFullYear();
  const date = props.date.getDate().toString().padStart(2,"0");

  return (
    <div className='expense-item'>
      <div>
        <div>{month} </div>
        <div>{year} </div>
        <div>{date} </div>
      </div>

      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item_price'>${props.price}</div>
      </div>
    </div>
  )
}
export default ExpenseItem;