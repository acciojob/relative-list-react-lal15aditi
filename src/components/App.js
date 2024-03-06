import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [arr, setArr] = useState(["list"]);

  function handle(e) {
    e.preventDefault();
    setArr([...arr, name]);
  }
  return (
    <div id="main">
      <form onSubmit={handle}>
        <input
          type="text"
          name="relativeName"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ol id="relativeList" key="relativeList">
        {arr.length >= 1 &&
          arr.map((item, index) => {
            return (
              <li
                id={`relativeListItem${index + 1}`}
                key={`relativeListItem${index + 1}`}
              >
                {item}
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default App;
