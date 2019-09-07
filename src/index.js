import React from 'react';
import { render } from "react-dom";
import { LayoutSimple } from "./lib";

const App = () => (
  <LayoutSimple title="Greetings">
    <p>Hello, world!</p>
  </LayoutSimple>
);

render(<App />, document.getElementById("root"));
