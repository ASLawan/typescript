import React from "react";
type NameProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

const Name = (props: NameProps) => {
  return (
    <div>
      <p>
        My name is: {props.name.firstName} {props.name.lastName}
      </p>
    </div>
  );
};

export default Name;
