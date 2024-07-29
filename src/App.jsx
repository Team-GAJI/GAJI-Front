import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import MainLayOut from './layout/MainLayOut';
import CommunityPage from './pages/CommunityPage';
import StudyCategory from './pages/StudyCategory/StudyCategory';

function App() {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<LoginPage/>}/>
      <Route>
      <Route exact path="/community" element={<CommunityPage/>}/>
      <Route exact path="/studycategory" element={<StudyCategory/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App