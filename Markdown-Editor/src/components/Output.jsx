import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Output(props) {
  return (
    <div className="outputSide">
      <ReactMarkdown className="markDown">{props.output}</ReactMarkdown>
    </div>
  );
}

export default Output;
