import React, { Suspense, useState } from "react";
import "./App.css";
const Component = React.lazy(() => import("./Component"));

function App() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div>
      <Suspense fallback={<p>Parent loading...</p>}>
        <h1 onClick={() => setShowComponent(!showComponent)}>Hello World</h1>
        {showComponent && <Component />}
        <Suspense fallback={<div>Loading...</div>}>
          <p>This is something</p>
        </Suspense>
      </Suspense>
    </div>
  );
}

export default App;
