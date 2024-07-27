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
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
