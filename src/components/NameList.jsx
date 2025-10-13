import React from "react";

function NameList() {
  const names = ["ajay", "kiran", "smith", "rolo"];
  return (
    <div>
      {names.map((name) => (
        <h2>{name}</h2>
      ))}
    </div>
  );
}

export default NameList;
