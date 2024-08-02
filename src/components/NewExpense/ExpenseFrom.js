import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");
  const [openFrom, setOpenFrom] = useState(true);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  };
  const fromSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      price: +enteredAmount,
      date: new Date(enteredDate),
      location: enteredLocation,
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredLocation("");
    setOpenFrom("true");
  };

  if (openFrom)
    return (
      <div className="new-expense__actions">
        <button onClick={() => setOpenFrom(false)}>Add Expense</button>
      </div>
    );

  return (
    <form onSubmit={fromSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={enteredAmount}
            min="0"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={enteredDate}
            min="2023-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="title">Location</label>
          <input
            type="text"
            id="location"
            value={enteredLocation}
            onChange={locationChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={() => setOpenFrom(true)}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
