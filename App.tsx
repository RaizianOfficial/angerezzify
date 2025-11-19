import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, googleProvider } from "./firebase";

import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { BottomNav } from "./components/BottomNav";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { Courses } from "./pages/Courses";
import { CourseDetails } from "./pages/CourseDetails";
import { Search } from "./pages/Search";
import { Settings } from "./pages/Settings";
import { Help } from "./pages/Help";
import { Profile } from "./pages/Profile";

const MainLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  // 🔥 GLOBAL DARK MODE STATE
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("lp_dark_mode");
    return saved === "true";
  });

  // Apply dark mode class to <html>
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    localStorage.setItem("lp_dark_mode", darkMode.toString());
  }, [darkMode]);

  // Firebase auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName,
          email: currentUser.email,
          avatar: currentUser.photoURL,
          uid: currentUser.uid,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login Failed", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsSidebarOpen(false);
    } catch (error) {
      console.error("Logout Failed", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pb-16 md:pb-0">
      <Navbar
        onToggleSidebar={() => setIsSidebarOpen(true)}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/search" element={<Search />} />

          {/* 🔥 Pass darkMode + setter to Settings */}
          <Route
            path="/settings"
            element={<Settings darkMode={darkMode} setDarkMode={setDarkMode} />}
          />

          <Route path="/help" element={<Help />} />
          <Route
            path="/profile"
            element={<Profile user={user} onLogin={handleLogin} />}
          />
        </Routes>
      </main>

      <Footer />
      <BottomNav user={user} onLogin={handleLogin} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <MainLayout />
    </HashRouter>
  );
};

export default App;
