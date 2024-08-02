import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses=props.expenses.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={changeFilterHandler} />
      {filteredExpenses.length===0 && <h2 className="expense-list__fallback">No expenses found</h2>}
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
            location={expense.location}
          />
        );
      })}
      {filteredExpenses.length===1 && <h2 className="expense-list__fallback">Only one expense here. Please add more</h2>}
    </Card>
  );
}

export default Expenses;
