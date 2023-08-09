import React from "react";

const Display = (props: any) => {
  console.log(props);
  return (
    <div>
      <h2>{props.value.name}</h2>
      <p>{props.value.description}</p>
    </div>
  );
};

export default Display;
