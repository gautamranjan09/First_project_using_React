import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
      };
    return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
      <label htmlFor="year-dropdown">Filter by Year</label>
        <select onChange={dropdownChangeHandler} id="year-dropdown">
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
