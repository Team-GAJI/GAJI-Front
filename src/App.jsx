<<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TroubleShootingPage from "./assets/components/TroubleShooting/TroubleShootingPage";
import StudyCategory from "./assets/components/StudyCategory/StudyCategory";
=======
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

>>>>>>> da2a6bc76e5cf1c61cf48b3e95b32c365a6fcd03

function App() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route exact path="/" element={<LoginPage />} />
      <Route path="/troubleshooting" element={<TroubleShootingPage />} />
      <Route path="/study-category" element={<StudyCategory />} />
=======
    <Route path="/login" element={<LoginPage/>}/>
      <Route element={<MainLayOut/>}>
      <Route path="/" element={<CommunityPage/>}/>
      <Route path="/community" element={<CommunityPage/>}/>
      <Route path="/community/post" element={<CommunityPostPage/>}/>
      <Route path="/community/write" element={<CommunityWritePage/>}/>
      <Route path="/mypage" element={<MyPage/>}/>
      <Route path="/studyroom" element={<StudyRoom/>}/>
      <Route path="/study" element={<StudyCategory/>}/>
    </Route>
>>>>>>> da2a6bc76e5cf1c61cf48b3e95b32c365a6fcd03
    </Routes>
  );
}

export default App;
