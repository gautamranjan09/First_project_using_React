import "./ExpenseItem.css";
function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div>{props.date.toISOString()} </div>
            <p className="expense-item__description"> {props.title} - <span className="expense-item__price">${props.price}</span></p>
            <p className="expense-item__description">Food - <span className="expense-item__price">$5</span></p>
            <p className="expense-item__description">Petrol - <span className="expense-item__price">$20</span></p>
            <p className="expense-item__description">Movie - <span className="expense-item__price">$10</span></p>
            <div className="expense-item__location">{props.location}</div>
        </div>
    );
}

export default ExpenseItem;