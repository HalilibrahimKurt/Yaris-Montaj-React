import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Products";
import { BrowserRouter as Rounter, Route, Switch } from "react-router-dom";
// import Product from "./components/pages/Products";
function App() {
  return (
    <Rounter>
      <div>
        <nav>
          <Header />
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" component={Product}></Route>
        </Switch>
      </div>
    </Rounter>
  );
}

export default App;
