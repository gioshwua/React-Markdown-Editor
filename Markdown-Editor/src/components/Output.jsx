import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Output(props) {
  return (
    <div>
      <ReactMarkdown>{props.output}</ReactMarkdown>
    </div>
  );
}

export default Output;
