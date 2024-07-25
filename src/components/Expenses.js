import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div>
      {props.expense.map((expense) => {
        return (
          <div className="expenses">
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              price={expense.price}
              location={expense.location}
            ></ExpenseItem>
          </div>
        );
      })}
    </div>
  );
}

export default Expenses;
