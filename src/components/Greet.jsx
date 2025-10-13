import React from "react";

const Greet = (props) => {
  const { name, age, salary } = props;
  console.log(props);
  return (
    <>
      <div>
        <h1>hello:{props.name}</h1>
        <h2>age:{props.age}</h2>
        <h2>salary:{props.salary}</h2>
      </div>
    </>
  );
};

export default Greet;
