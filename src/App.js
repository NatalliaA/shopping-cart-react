import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

const store = createStore (reducer);

function App() {
  // cart setup

  //{store} the store name should match with the store variable storing createStore
  return (
    <Provider store={store}>
      <Navbar/>
      <CartContainer />
    </Provider>
  );
}

export default App;
