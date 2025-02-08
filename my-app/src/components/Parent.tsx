import React from "react";

type ParentProps = {
  children: React.ReactNode;
};
const Parent = (props: ParentProps) => {
  return (
    <div>
      <p>I am the Parent</p>
      {props.children}
    </div>
  );
};

export default Parent;
