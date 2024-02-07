import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-bl from-[#ede5de] to-[#6c778f] custom-scrollbar">
      {/* <Header /> */}
      <Hero />

      <h1>Goutam Bhati</h1>
    </div>
  );
}

export default App;
