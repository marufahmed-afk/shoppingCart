import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import ProductState from "./context/product/ProductState";
import OrderState from "./context/order/OrderState";

import Dashboard from "./components/ui/Dashboard";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <OrderState>
      <ProductState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ProductState>
    </OrderState>
  );
}

export default App;
