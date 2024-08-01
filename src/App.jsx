import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import CommunityPage from './pages/CommunityPage';
import StudyCategory from './pages/StudyCategory';
import CommunityPostPage from './pages/CommunityPostPage';
import CommunityWritePage from './pages/CommunityWritePage';
import MyPage from './pages/MyPage';
import StudyRoom from './pages/StudyRoom';

import CreateStudy from './pages/CreateStudy';

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
      <Route path="/CreateStudy" element={<CreateStudy/>}/>
    </Route>
    </Routes>
    </>
  )
}

export default App