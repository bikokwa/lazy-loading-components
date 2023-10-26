import React, { Suspense, useState } from "react";
import "./App.css";
const Component = React.lazy(() => import("./Component"));

function loadComponent() {
  import("./Component");
}

function App() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div>
      <h1
        onMouseOver={loadComponent}
        onClick={() => setShowComponent(!showComponent)}
      >
        Hello World
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <p>This is something</p>
        {showComponent && <Component />}
      </Suspense>
    </div>
  );
}

export default App;
