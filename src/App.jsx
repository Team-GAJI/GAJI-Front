import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import RegisterPage from './pages/auth/RegisterPage';
import MainLayOut from './layout/MainLayOut';
import CommunityPage from './pages/CommunityPage';
import CommunityPostPage from './pages/CommunityPostPage';
import CommunityWritePage from './pages/CommunityWritePage';
import MyPage from './pages/mypage/MyPage';
import StudyRoom from './pages/StudyRoom';
import StudyCategory from './pages/StudyCategory';


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<RegisterPage/>}/>
      <Route element={<MainLayOut/>}>
      <Route path="/community" element={<CommunityPage/>}/>
      <Route path="/community/post" element={<CommunityPostPage/>}/>
      <Route path="/community/write" element={<CommunityWritePage/>}/>
      <Route path="/mypage" element={<MyPage/>}/>
      <Route path="/studyroom" element={<StudyRoom/>}/>
      <Route path="/study" element={<StudyCategory/>}/>
    </Route>
    </Routes>
    </>
  )
}

export default App