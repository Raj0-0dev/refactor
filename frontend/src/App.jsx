import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

// Common Components
import VisitorHeader from './components/VisitorHeader';
import AuthSidebar from './components/AuthSidebar';

// Pages
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Onboarding from './pages/Onboarding';
import Path from './pages/Path';
import Auth from './pages/Auth';

function AppContent() {
  const location = useLocation();
  const isAuthRoute = ['/dashboard', '/onboarding', '/path', '/profile'].includes(location.pathname);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-800 font-sans selection:bg-amber-100 selection:text-amber-900">
      {isAuthRoute ? (
        <AuthSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      ) : (
        <VisitorHeader />
      )}

      {/* Expand Sidebar Floating Button */}
      {isAuthRoute && isCollapsed && (
        <button
          onClick={() => setIsCollapsed(false)}
          className="hidden md:flex fixed left-5 top-5 z-45 p-2 bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-900 border border-stone-200 shadow-md rounded-full transition-all hover:scale-105 active:scale-95 items-center justify-center"
          title="Expand Sidebar"
        >
          <ChevronRight size={18} />
        </button>
      )}

      <main className={`relative z-10 transition-all duration-300 ${isAuthRoute ? (isCollapsed ? 'md:pl-0 pt-16 md:pt-0' : 'md:pl-64 pt-16 md:pt-0') : ''}`}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/path" element={<Path />} />
          <Route path="/profile" element={<div className="pb-16 text-center text-stone-500 font-bold pt-24">Coming Soon</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
