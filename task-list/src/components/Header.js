import React from "react";
import Button from "./Button";

export default function Header({ title }) {
  const onClick = (e) => {
    console.log(e);
  };

  return (
    <div className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add Task" onClick={onClick} />
    </div>
  );
}
