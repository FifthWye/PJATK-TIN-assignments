import React from "react";

function Label(props) {
  return (
    <div>
      <label>{props.label} :</label> {props.val}
    </div>
  );
}

export default Label;
