import React from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const param = useParams();

  return (
    <div>
      Hello Update the data
      <p>{param.myID}</p>
      <form action=""></form>
    </div>
  );
};

export default Update;
