import { useState, useEffect } from "react";
import "./ScientistTable.css";

const ScientistTable = () => {
  const [scientists, setScientists] = useState([]);

  useEffect(() => {
    const fetchScientists = () => {
      setScientists(JSON.parse(localStorage.getItem("users")));
    };
    fetchScientists();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {scientists.map((scientist) => (
          <tr key={scientist.id}>
            <td>{scientist.fullName}</td>
            <td>{scientist.username}</td>
            <td>{scientist.email}</td>
            <td>{scientist.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { ScientistTable };
