import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './store/store.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import StudyDetail from './pages/StudyDetail.jsx';
/*import User from './pages/User.jsx';*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StudyDetail/>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
