import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './store/store.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import StudyCategory from '../src/pages/StudyCategory/StudyCategory.jsx';
/*import BackStudyRecruitment from './pages/StudyCategory/BackStudyRecruitment.jsx';
import FlippingCard from './pages/StudyCategory/FlippingCard.jsx';*/


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StudyCategory/>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
