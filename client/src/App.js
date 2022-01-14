import {
  Link,
  NavLink,
  Switch,
  BrowserRouter,
  Redirect,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import StorePage from "./pages/StorePage/StorePage";

// the routes here are open to changes
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/category/:id" component={CategoryPage} />
        <Route path="/store/:id" component={StorePage} />
        <Route path="/" exact component={HomePage} />
        <Route path="*">
          <Redirect to="/" exact component={HomePage} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
