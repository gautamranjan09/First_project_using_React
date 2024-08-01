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
  const filteredExpense=props.expenses.filter((expense)=>{
    return expense.date.getFullYear().toString() == filteredYear;
  })
  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={changeFilterHandler} />
      {filteredExpense.map((expense) => {
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
    </Card>
  );
}

export default Expenses;
