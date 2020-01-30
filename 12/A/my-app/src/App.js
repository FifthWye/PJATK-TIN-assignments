import React from "react";
import "./App.css";
import Label from "./Label";
import Text from "./Text";
import Form from "./Form";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Form</Link>
            </li>
            <li>
              <Link to="/text">Text</Link>
            </li>
            <li>
              <Link to="/label">Label</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/label">
            <LabelRoute />
          </Route>
          <Route path="/text">
            <TextRoute />
          </Route>
          <Route path="/">
            <FormRoute />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function LabelRoute() {
  return <Label label="Label" val="Value" />;
}

function TextRoute() {
  return <Text text="My Text" />;
}

function FormRoute() {
  return <Form />;
}
