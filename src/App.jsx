import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import RegisterPage from './pages/auth/RegisterPage';
import MainLayOut from './layout/MainLayOut';
import CommunityPage from './pages/CommunityPage';
import MyPage from './pages/mypage/MyPage';


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<RegisterPage/>}/>
      <Route element={<MainLayOut/>}>
      <Route path="/community" element={<CommunityPage/>}/>
      <Route path="/mypage" element={<MyPage/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App