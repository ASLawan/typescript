import React from "react";
type GreetProps = {
  name: string;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <p>Hello, {props.name}</p>
    </div>
  );
};

export default Greet;
