import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<LoginPage/>}/>
    </Routes>
    </>
  )
}

export default App