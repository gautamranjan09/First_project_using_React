import "./ExpenseItem.css";
function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>15 August 2023 </div>
            <p className="expense-item__description"> Book - <span className="expense-item__price">$10</span></p>
            <p className="expense-item__description">Food - <span className="expense-item__price">$5</span></p>
            <p className="expense-item__description">Petrol - <span className="expense-item__price">$20</span></p>
            <p className="expense-item__description">Movie - <span className="expense-item__price">$10</span></p>
            <div className="expense-item__location">Delhi</div>
        </div>
    );
}

export default ExpenseItem;