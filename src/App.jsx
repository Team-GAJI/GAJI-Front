import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import TroubleShootingPage from "./assets/components/TroubleShooting/TroubleShootingPage";
import TroubleshootingRegistrationPage from "./pages/TroubleshootingRegistrationPage";
import StudyCategory from "./assets/components/StudyCategory/StudyCategory";
import MainLayOut from "./layout/MainLayOut";
import CommunityPage from "./pages/CommunityPage";
import CommunityPostPage from "./pages/CommunityPostPage";
import CommunityWritePage from "./pages/CommunityWritePage";
import MyPage from "./pages/MyPage";
import StudyRoom from "./pages/StudyRoom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<MainLayOut />}>
        <Route path="/" element={<CommunityPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/post" element={<CommunityPostPage />} />
        <Route path="/community/write" element={<CommunityWritePage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/studyroom" element={<StudyRoom />} />
        <Route path="/study" element={<StudyCategory />} />
        <Route path="/troubleshooting" element={<TroubleShootingPage />} />
        <Route
          path="/troubleshooting-register"
          element={<TroubleshootingRegistrationPage />}
        />
        <Route path="/study-category" element={<StudyCategory />} />
      </Route>
    </Routes>
  );
}

export default App;
