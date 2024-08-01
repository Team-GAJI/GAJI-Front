import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop.js"; // Uncomment if necessary

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* Uncomment the following line if you want to use ScrollToTop */}
        {/* <ScrollToTop /> */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
