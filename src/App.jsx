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
import StudyMainPage from './pages/StudyMainPage.jsx';
import StudyCategoryPage from './pages/StudyCategoryPage.jsx';
import StudyManagePage from './pages/StudyManagePage.jsx';
import StudyNoticePage from './pages/StudyNoticePage.jsx';
import StudyRoomPage from './pages/StudyRoomPage.jsx';
import StudyManageWeekPage from './pages/StudyManageWeekPage.jsx';
import StudyDetailPage from './pages/StudyDetailPage.jsx';
import StudyCreatePage from './pages/StudyCreatePage.jsx';

function App() {
  return (

    <Routes>
      {/* 로그인 페이지 라우트 */}
      <Route exact path="/login" element={<LoginPage/>}/>
      {/* 사용자가 로그인할 수 있는 페이지 */}
      
      {/* 메인 레이아웃이 적용되는 라우트 그룹 */}
      <Route element={<MainLayOut/>}>
        {/* 모든 하위 라우트에 메인 레이아웃이 적용됩니다 */}
        
        {/* 메인 페이지 라우트 */}
        <Route path="/" element={<MainPage/>}/>
        {/* 사용자가 처음 방문하는 메인 페이지 */}
        
        {/* 커뮤니티 관련 라우트 */}
        <Route path="/community" element={<CommunityPage/>}/>
        {/* 커뮤니티 게시판 메인 페이지 */}
        
        <Route path="/community/post/" element={<CommunityPostPage/>}/>
        {/* 커뮤니티 게시글 상세 조회 페이지 */}
        
        <Route path="/community/write" element={<CommunityWritePage/>}/>
        {/* 커뮤니티 게시글 작성 페이지 */}

        {/* 마이페이지 라우트 */}
        <Route path="/mypage" element={<MyPage/>}/>
        {/* 사용자의 개인 정보를 확인하고 수정할 수 있는 마이페이지 */}

        {/* 스터디 관련 라우트 */}
        <Route path="/study" element={<StudyMainPage/>}/>
        {/* 스터디 메인 페이지 */}

        <Route path="/studycategory" element={<StudyCategoryPage/>}/>
        {/* 스터디 카테고리별 둘러보기 페이지 */}
        
        <Route path="/studydetail" element={<StudyDetailPage/>}/>
        {/* 특정 스터디의 상세 정보 페이지 */}

        <Route path="/studymanage" element={<StudyManagePage/>}/>
        {/* 스터디 관리 페이지 */}
        
        <Route path="/studyweekmanage" element={<StudyManageWeekPage/>}/>
        {/* 주차별 스터디 관리 페이지 */}
        
        <Route path="/studyroom" element={<StudyRoomPage/>}/>
        {/* 사용자가 참여한 스터디룸 페이지 */}
    
        
        <Route path="/studycreate" element={<StudyCreatePage/>}/>
        {/* 새로운 스터디를 생성하는 페이지 */}
        
        <Route path="/studynotice" element={<StudyNoticePage/>}/>
        {/* 스터디 공지사항 목록 페이지 */}
        
        {/* 트러블슈팅 관련 라우트 */}
        <Route path="/troubleshooting" element={<TroubleShootingPage />} />
        {/* 트러블슈팅 페이지, 문제 해결을 위한 도움말 페이지 */}
        
        <Route path="/troubleshooting-register" element={<TroubleshootingRegistrationPage/>}/>
        {/* 사용자가 문제를 보고하는 트러블슈팅 등록 페이지 */}
      </Route>
    </Routes>
  );
}

export default App;
