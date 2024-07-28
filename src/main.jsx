<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './store/store.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
// import ScrollToTop from './components/common/ScrollToTop.js';
//ScrollTop - 작성자

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <ScrollToTop/> */}
>>>>>>> da2a6bc76e5cf1c61cf48b3e95b32c365a6fcd03
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
