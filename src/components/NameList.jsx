import React from "react";

const NameList = () => {
  const persons = [
    {
      id: 1,
      name: "bruce",
      age: 20,
      skill: "react",
    },
    {
      id: 2,
      name: "brucly",
      age: 25,
      skill: "js",
    },
    {
      id: 3,
      name: "samith",
      age: 20,
      skill: "html",
    },
    {
      id: 4,
      name: "sachin",
      age: 20,
      skill: "css",
    },
  ];
  const names = ["bruce", "clerk", "diana"];
  const namelist = names.map((name, index) => <h2 key={index}>{name}</h2>);
  return (
    <>
      <div>
        {/* {names.map((name) => (
          <h1 key={name.id}>
            iam {name.name},iam{name.age}
          </h1>
        ))} */}
        {namelist}
      </div>
    </>
  );
};

export default NameList;
