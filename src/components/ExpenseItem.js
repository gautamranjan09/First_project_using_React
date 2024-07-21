import "./ExpenseItem.css";
function ExpenseItem() {
    const expenseDate = new Date(2023, 7, 15).toISOString();
    const expenseTitle = "Insurance";
    const expenseAmount = 50;
    const expenseLocation ="Bangalore";
    return (
        <div className="expense-item">
            <div>{expenseDate} </div>
            <p className="expense-item__description"> {expenseTitle} - <span className="expense-item__price">${expenseAmount}</span></p>
            <p className="expense-item__description">Food - <span className="expense-item__price">$5</span></p>
            <p className="expense-item__description">Petrol - <span className="expense-item__price">$20</span></p>
            <p className="expense-item__description">Movie - <span className="expense-item__price">$10</span></p>
            <div className="expense-item__location">{expenseLocation}</div>
        </div>
    );
}

export default ExpenseItem;