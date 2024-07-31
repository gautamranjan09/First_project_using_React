import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import { useState } from "react";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <p className="expense-item__description"> {title}<span className="expense-item__price">${props.price}</span></p>
            <p className="expense-item__description">Food<span className="expense-item__price">$5</span></p>
            <p className="expense-item__description">Petrol<span className="expense-item__price">$20</span></p>
            <p className="expense-item__description">Movie<span className="expense-item__price">$10</span></p>
            <div className="expense-item__location">{props.location}</div>
            <button onClick={()=>{
                setTitle("New Title");
            }}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;