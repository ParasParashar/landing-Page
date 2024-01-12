import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-bl from-[#ede5de] to-[#8892a8] custom-scrollbar">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
