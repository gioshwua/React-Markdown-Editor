import React from "react";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  const [markdown, setMarkdown] = React.useState("");
  function inputtedSomething(event) {
    setMarkdown(event.target.value);
  }
  return (
    <div>
      <Input
        input={inputtedSomething}
        placeholder="input something"
        value={markdown}
      />
      <Output output={markdown} />
    </div>
  );
}

export default App;
