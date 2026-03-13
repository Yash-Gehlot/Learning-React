import './ExpenseItem.css'
export default function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>March 28th 2021</div>
      <div>15 August 2023</div>
      <div className='expense-item__location'>Delhi</div>
      <h2 className='expense-item__description'>Book</h2>
      <div className='expense-item__price'>$10</div>
    </div> 
  )
}