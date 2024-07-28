import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TroubleShootingPage from "./assets/components/TroubleShooting/TroubleShootingPage";
import StudyCategory from "./assets/components/StudyCategory/StudyCategory";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route path="/troubleshooting" element={<TroubleShootingPage />} />
      <Route path="/study-category" element={<StudyCategory />} />
    </Routes>
  );
}

export default App;
