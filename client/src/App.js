import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Jumbo from "./components/Jumbo";
import Saved from "./pages/Saved";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <NavBar />
      <Jumbo />
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route exact path="/saved">
          <Saved />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
