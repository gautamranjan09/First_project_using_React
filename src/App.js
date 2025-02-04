import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense.js";

function App() {
  const [expenses, setExpense]=useState([
    {
      id: "1",
      date: new Date(2023, 7, 15),
      title: "Insurance",
      price: 100,
      location: "Bangalore",
    },
    {
      id: "2",
      date: new Date(2024, 3, 25),
      title: "Book",
      price: 10,
      location: "Delhi",
    },
    {
      id: "3",
      date: new Date(2025, 10, 11),
      title: "Pen",
      price: 1,
      location: "Hyderabad",
    },
    {
      id: "4",
      date: new Date(2024, 1, 14),
      title: "Laptop",
      price: 200,
      location: "Mumbai",
    },
  ]);

  const addNewDataHandler=(data)=>{
    setExpense((prevData)=>{
      return [...prevData,data];
    });
  };
  return (
    <div>
      <h1>Let's get Started</h1>
      <p>I am learning React</p>
      <NewExpense onAddNewData={addNewDataHandler}/>

      {/* <ExpenseItem date={new Date(2023, 7, 15)} title="Insurance" price="50" location="Bangalore" />
      
      <ExpenseItem
        date={new Date(2023, 3, 25)}
        title="Book"
        price="20"
        
      ></ExpenseItem>
      
      <ExpenseItem
        date={new Date(2023, 10, 11)}
        title="Pen"
        price="5"
        
      ></ExpenseItem>
      
      <ExpenseItem date={new Date(2023, 1, 14)} title="Laptop" price="200" /> */}

      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
