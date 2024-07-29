import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import StudyRoom from './pages/StudyRoom/StudyRoom';

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<LoginPage/>}/>
      <Route exact path="/studyroom" element={<StudyRoom/>}/>
    </Routes>
    </>
  )
}

export default App