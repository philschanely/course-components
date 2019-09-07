import React from 'react';
import { render } from "react-dom";
import { LayoutSimple, Callout } from "./lib";

const App = () => (
  <LayoutSimple title="Greetings">
    <p>Hello, world!</p>
    <Callout>
      <p>Welcome to my site</p>
    </Callout>
  </LayoutSimple>
);

render(<App />, document.getElementById("root"));
