import React from "react";
import "./Employee.css";

const Employee = (props) => {
  const { database } = props;
  return (
    <h3 className="employee">
      {database.map((employee) => {
        const { firstName, lastName, age, employeeID } = employee;
        return (
          <div key={employeeID}>
            {" "}
            {firstName} {lastName} <h1>{age}</h1>{" "}
          </div>
        );
      })}
    </h3>
  );
};

export default Employee;
