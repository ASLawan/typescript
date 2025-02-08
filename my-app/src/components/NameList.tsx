import React from "react";
type NameListProps = {
  names: {
    firstName: string;
    lastName: string;
    isMarried: boolean;
  }[];
};
const NameList = (props: NameListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h3>
            `{name.firstName} {name.lastName}. Married:{" "}
            {name.isMarried ? "Yes!" : "No!"}`
          </h3>
        );
      })}
    </div>
  );
};

export default NameList;
