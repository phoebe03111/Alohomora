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
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

// the routes here are open to changes
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route path="/category/:id" component={CategoryPage} />
        <Route path="/store/:id" component={StorePage} />
        <Route path="/" exact component={HomePage} />
        <Route path="*">
          <Redirect to="/" exact component={HomePage} />
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
