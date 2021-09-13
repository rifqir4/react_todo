import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PageTodo from "./Page/Todo/PageTodo";
import PageTodoAdd from "./Page/Todo/PageTodoAdd";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="APP">
          <Switch>
            <Route exact path="/">
              <PageTodo />
            </Route>
            <Route exact path="/add">
              <PageTodoAdd />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
