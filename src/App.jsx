import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import MainLayOut from './layout/MainLayOut';
import CommunityPage from './pages/CommunityPage';
import CommunityPostPage from './pages/CommunityPostPage';
import MyPage from './pages/MyPage';
import StudyRoom from './pages/StudyRoom';
import StudyCategory from './pages/StudyCategory';


function App() {
  return (
    <>
    <Routes>
    <Route path="/login" element={<LoginPage/>}/>
      <Route element={<MainLayOut/>}>
      <Route path="/" element={<CommunityPage/>}/>
      <Route path="/community" element={<CommunityPage/>}/>
      <Route path="/community/post" element={<CommunityPostPage/>}/>
      <Route path="/mypage" element={<MyPage/>}/>
      <Route path="/studyroom" element={<StudyRoom/>}/>
      <Route path="/study" element={<StudyCategory/>}/>
    </Route>
    </Routes>
    </>
  )
}

export default App