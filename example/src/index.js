import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import TestEditor from './TestRoutes/TestEditor'
import Form from "./pages/Form/Form";
import Forms from "./pages/Forms/Forms";
import Records from "./pages/Records/Records";
import { TodoEditor } from "./pages/Todo/editor";
import { TodoPage } from "./pages/Todo/page";
import "./index.css";

const FormStyles = () => (
  <style>{`body{background: rgb(198, 203, 208);}`}</style>
);

ReactDOM.render(
  <Router>
    <Route exact path="/" render={() => <App />} />
    <Switch>
      <Route
        exact
        path="/records"
        render={() => (
          <React.Fragment>
            <FormStyles />
            <Records />
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/forms"
        render={() => (
          <React.Fragment>
            <FormStyles />
            <Forms />
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/form/:formId"
        render={() => (
          <React.Fragment>
            <FormStyles />
            <Form />
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/form"
        render={() => (
          <React.Fragment>
            <FormStyles />
            <Form />
          </React.Fragment>
        )}
      />
      <Route exact path="/test" render={() => <TestEditor />} />
      <Route exact path="/todo" render={() => <TodoEditor />} />
      <Route exact path="/todo/page" render={() => <TodoPage />} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
