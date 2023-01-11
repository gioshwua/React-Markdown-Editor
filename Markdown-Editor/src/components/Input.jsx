import React from "react";

function Input(props) {
  return (
    <div>
      <textArea
        onChange={props.input}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
}

export default Input;
