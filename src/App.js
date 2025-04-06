import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import PlanetsPage from "./pages/PlanetsPage";
import StarshipsPage from "./pages/StarshipsPage";

function App() {
  // Initialize theme on app load
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const isDarkMode = 
      localStorage.getItem("theme") === "dark" || 
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    // Apply the appropriate class to the html element
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-light-mode dark:bg-star-wars-black text-light-mode dark:text-dark-mode flex flex-col transition-colors duration-500">
      <Navbar />
      <main className="pt-navbar md:pt-navbar-lg pb-section flex-grow container mx-auto px-4 md:px-content-lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetailPage />} />
          <Route path="/planets" element={<PlanetsPage />} />
          <Route path="/starships" element={<StarshipsPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;