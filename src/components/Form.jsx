import React, { useState } from "react";

function Form() {
  const [data, setData] = useState({
    username: "",
    password: "",
    age: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={handleChange}
        />

        <label htmlFor="salary">Salary</label>
        <input
          type="text"
          name="salary"
          value={data.salary}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
