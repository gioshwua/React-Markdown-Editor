import React from "react";

function Input(props) {
  return (
    <div className="inputSide">
      <textarea
        autoFocus
        onChange={props.input}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
}

export default Input;
