import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import MainLayOut from './layout/MainLayOut';
import CommunityPage from './pages/CommunityPage';


function App() {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<LoginPage/>}/>
      <Route element={<MainLayOut/>}>
      <Route exact path="/community" element={<CommunityPage/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App