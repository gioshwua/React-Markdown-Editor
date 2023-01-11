import React from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = React.useState("");
  function inputtedSomething(event) {
    setMarkdown(event.target.value);
  }
  return (
    <div className="app">
      <h1>MARKDOWN EDITOR</h1>
      <div className="content">
        <Input
          input={inputtedSomething}
          placeholder="TYPE YOUR MARKDOWN HERE "
          value={markdown}
        />
        <Output output={markdown} />
      </div>
    </div>
  );
}

export default App;
