import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainLayOut from '../components/layout/MainLayOut';
import MyPage from '../pages/mypage/MyPage';
import LoginPage from '../pages/login/LoginPage';

function App() {
    return (
        <Routes>
            {/* 로그인 페이지 라우트 */}
            <Route exact path="/login" element={<LoginPage/>} />

            {/* 메인 레이아웃이 적용되는 라우트 그룹 */}
            <Route element={<MainLayOut />}>
                {/* 모든 하위 라우트에 메인 레이아웃이 적용됩니다 */}

                {/* 마이페이지 라우트 */}
                <Route exact path="/mypage" element={<MyPage />} />
                {/* 사용자의 개인 정보를 확인하고 수정할 수 있는 마이페이지 */}
            </Route>
        </Routes>
    );
}

export default App;
