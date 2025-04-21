import React from "react";

export default function App() {
  const marks = [52, 45, 56, 65, 38, 69]; // exam 75, 50 marks 5 bonus points.

  const students = [
    { name: "Ravi", score: 62 },
    { name: "Anandh", score: 42 },
    { name: "chakri", score: 32 },
    { name: "devi", score: 52 },
  ];

  const filtered50Above = students.map((student) => {
    if (student.score >= 50) {
      return { ...student, score: student.score + 5 };
    }
    return student;
  });

  // const filtered50Above = students
  //   .filter((student) => {
  //     debugger;
  //     return student.score >= 50;
  //   })
  //   .map((student) => {
  //     debugger;
  //     return { ...student, score: student.score + 5 };
  //   });

  console.log(filtered50Above);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {students.map((student) => {
        return (
          <div>
            {student.name} - {student.score}
          </div>
        );
      })}
      <div> Above 50 got 5 extra points</div>
      {filtered50Above.map((student) => {
        return (
          <div>
            {student.name} - {student.score}
          </div>
        );
      })}
    </div>
  );
}




import "./styles.css";

export default function App() {
  const cities = ["New York", "Los Angels", "Chikago", "Houston", "Texas"];
  const updatedOptions = cities.map((city) => {
    debugger;
    const splitted = city.split(" ");
    const value =
      splitted?.length > 1
        ? `${splitted[0][0]}${splitted[1][0]}`
        : city.slice(0, 2);
    return { option: city, value: value };
  });

  // updatedOptions.unshift({ option: "none", value: "" });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <select>
        <option> None </option>
        {updatedOptions.map((city) => {
          return (
            <option key={city.value}>
              {city.value}-{city.option}{" "}
            </option>
          );
        })}
      </select>
    </div>
  );
}
