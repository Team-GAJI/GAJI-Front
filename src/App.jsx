import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import CommunityPage from './pages/CommunityPage';


function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<CommunityPage/>}/>
    </Routes>
    </>
  )
}

export default App