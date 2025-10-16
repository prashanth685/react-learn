import React from "react";

function Memo({ name }) {
  console.log("rendering memocomponet");
  return <div>{name}</div>;
}

export default React.memo(Memo);
