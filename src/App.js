import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import { Footer } from "./components/layout/Footer";

function App() {
  //(2 * cos(x1)) + (4 * sin(x1 / 10)) + (10 * cos(x1) * sin(x1))
  //exp(-(1/3)*x1^3+x1-x2^2)
  return (
    <Provider store={store}>
      <Navbar />
      <div className="fit-screen">
        <Home />
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
