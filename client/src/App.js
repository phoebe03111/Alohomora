import {
  Link,
  NavLink,
  Switch,
  BrowserRouter,
  Redirect,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import StorePage from "./pages/StorePage/StorePage";
import Footer from "./components/Footer/Footer";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import Header from "./components/Header/Header";
import ContactPage from "../src/pages/ContactPage/ContactPage";
import AboutPage from "../src/pages/AboutPage/AboutPage";
import DetailedActivityPage from "./pages/DetailedActivityPage/DetailedActivityPage";
import Modal from "./components/Modal/Modal";
import FilteredResultsPage from "./pages/FilteredResultsPage/FilteredResultsPage";

// the routes here are open to changes
function App() {
  return (
    <BrowserRouter className="app">
      <Header />
      <Switch>
        <Route path="/explore/result/:id" component={DetailedActivityPage} />
        <Route path="/explore/result" exact component={FilteredResultsPage} />
        <Route path="/store/:id" component={StorePage} />
        <Route path="/" exact component={HomePage} />
        <Route path="/explore" exact component={ExplorePage} />
        <Route path="/test" component={Modal} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" exact component={HomePage} />
        <Route path="*">
          <Redirect to="/" exact component={HomePage} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
