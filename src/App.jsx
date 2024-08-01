import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import MainLayOut from './layout/MainLayOut';
import CommunityPage from './pages/CommunityPage';
import StudyCategory from './pages/StudyCategory/StudyCategory';
import CommunityPostPage from './pages/CommunityPostPage';
import CommunityWritePage from './pages/CommunityWritePage';
import MyPage from './pages/MyPage';
import StudyRoom from './pages/StudyRoom/StudyRoom.jsx';


function App() {
  return (
    <Routes>
      <Route element={<MainLayOut/>}>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/studyroom" element={<StudyRoom/>}/>      
        <Route path="/" element={<CommunityPage/>}/>
        <Route path="/community" element={<CommunityPage/>}/>
        <Route path="/community/post" element={<CommunityPostPage/>}/>
        <Route path="/community/write" element={<CommunityWritePage/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/studyroom" element={<StudyRoom/>}/>
        <Route path="/study" element={<StudyCategory/>}/>
    </Route>
    </Routes>
  );
}

export default App;
