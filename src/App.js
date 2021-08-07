import React from "react";
import "./App.css";
import Employee from "./Employee/Employee.jsx";
import Counter from "./Counter/Counter.jsx";

const database = [
  {
    firstName: "Judith",
    lastName: "Walters",
    age: 20,
    employeeID: "1"
  },
  {
    firstName: "Swiss",
    lastName: "Henry",
    age: 21,
    employeeID: "2"
  },
  {
    firstName: "Anthony",
    lastName: "Igwe",
    age: 22,
    employeeID: "3"
  },
  {
    firstName: "John",
    lastName: "Osagie",
    age: 23,
    employeeID: "4"
  }
];
const App = () => {
  return (
    <div className="App">
      <Counter />
      <Employee database={database} />
    </div>
  );
};

export default App;
