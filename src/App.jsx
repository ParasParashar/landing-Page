import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <div className="flex flex-col min-h-screen bg-gradient-to-bl from-[#ede5de] to-[#6c778f] custom-scrollbar">
        <Header />
        <Hero />
        <Footer />
      </div>
    </Routes>
  );
}

export default App;
