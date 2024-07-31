import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import RegisterPage from './pages/auth/RegisterPage';
/*import MainLayOut from './layout/MainLayOut';*/
import StudyDetailMainLayout from './layout/StudyDetail/StudyDetailMainLayOut';
import StudyDetail from './pages/StudyDetail/StudyDetail';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<RegisterPage/>}/>
      <Route element={<StudyDetailMainLayout/>}>
  
      <Route path="/studydetail" element={<StudyDetail/>}/>   
    </Route>
    </Routes>
    </>
  )
}

export default App