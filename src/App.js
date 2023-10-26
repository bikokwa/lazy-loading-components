import React from "react";
import "./App.css";
const Component = React.lazy(() => import("./Component"));

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      {Math.random() > 0.5 && <Component />}
    </div>
  );
}

export default App;
