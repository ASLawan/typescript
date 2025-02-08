import React from "react";

type StatusProps = {
  status: "loading" | "success" | "error"; // union type
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading data....";
  } else if (props.status === "success") {
    message = "Sucessfully fetched data";
  } else if (props.status === "error") {
    message = "Error fetching data.";
  }
  return (
    <div>
      <p>Status: {message}</p>
    </div>
  );
};

export default Status;
