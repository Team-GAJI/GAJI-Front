import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import MainLayOut from './layout/MainLayOut';
import CommunityPage from './pages/CommunityPage';
import CommunityPostPage from './pages/CommunityPostPage';
import CommunityWritePage from './pages/CommunityWritePage';
import MyPage from './pages/MyPage';
import StudyRoom from './pages/StudyRoom';
import StudyCategory from './pages/StudyCategory';
import StudyNotice from './pages/StudyNotice/StudyNotice.jsx';


function App() {
  return (
    <>
    <Routes>
    <Route path="/login" element={<LoginPage/>}/>
      <Route>
      <Route path="/" element={<CommunityPage/>}/>
      <Route path="/community" element={<CommunityPage/>}/>
      <Route path="/community/post" element={<CommunityPostPage/>}/>
      <Route path="/community/write" element={<CommunityWritePage/>}/>
      <Route path="/mypage" element={<MyPage/>}/>
      <Route path="/studyroom" element={<StudyRoom/>}/>
      <Route path="/study" element={<StudyCategory/>}/>
      <Route exact path="/studynotice" element={<StudyNotice/>}/>

    </Route>
    </Routes>
    </>
  )
}

export default App