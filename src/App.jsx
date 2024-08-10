

import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import MainLayOut from './layout/MainLayOut';
import MainPage from './pages/MainPage.jsx';
import CommunityPage from './pages/CommunityPage';
import CommunityPostPage from './pages/CommunityPostPage';
import CommunityWritePage from './pages/CommunityWritePage';
import MyPage from './pages/MyPage';
import TroubleshootingRegistrationPage from "./pages/TroubleshootingRegistrationPage";
import TroubleShootingPage from './pages/TroubleShootingPage.jsx';
import StudyManagePage from './pages/StudyManagePage.jsx';
import StudyNoticePage from './pages/StudyNoticePage.jsx';
import StudyRoomPage from './pages/StudyRoomPage.jsx';
import StudyManageWeekPage from './pages/StudyManageWeekPage.jsx';
import StudyDetailPage from './pages/StudyDetailPage.jsx';
import StudyCreatePage from './pages/StudyCreatePage.jsx';
import LoginRedirectPage from './pages/LoginRedirectPage.jsx';

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginPage/>}/>
      <Route exact path="/redirect" element={<LoginRedirectPage/>}/>
      <Route element={<MainLayOut/>}>
        <Route exact path="/studyroom" element={<StudyRoomPage/>}/>      
        <Route path="/" element={<MainPage/>}/>
        <Route path="/community" element={<CommunityPage/>}/>
        <Route path="/community/post" element={<CommunityPostPage/>}/>
        <Route path="/community/write" element={<CommunityWritePage/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/studymanage" element={<StudyManagePage/>}/>
        <Route path="/studyweekmanage" element={<StudyManageWeekPage/>}/>
        <Route path="/studyroom" element={<StudyRoomPage/>}/>
        {/* <Route path="/studycategory" element={<StudyCategoryPage/>}/> */}
        <Route path="/studydetail" element={<StudyDetailPage/>}/>
        <Route path="/studycreatepgage" element={<StudyCreatePage/>}/>
        <Route exact path="/studynotice" element={<StudyNoticePage/>}/>
        {/* <Route path='/studydetail' element={<StudyDetailPage/>}/> */}
        <Route path="/troubleshooting" element={<TroubleShootingPage />} />
        <Route
            path="/troubleshooting-register"
            element={<TroubleshootingRegistrationPage/>}
          />
      </Route>
    </Routes>
  );
}

export default App;
