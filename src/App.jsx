import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TroubleShootingPage from "./pages/TroubleShooting/TroubleShootingPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route path="/troubleshooting" element={<TroubleShootingPage />} />
    </Routes>
  );
}

export default App;
