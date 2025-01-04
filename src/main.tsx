import * as React from "react";
import * as ReactDOM from "react-dom/client";

function App(): React.JSX.Element {
  return <h1>Good luck!</h1>;
}

const root = document.getElementById("root");
if (root === null) throw new Error('Error: No element of ID "root" found.');
ReactDOM.createRoot(root).render(<App />);
