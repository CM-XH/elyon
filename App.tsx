import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppData } from './types';
import { INITIAL_DATA } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';

interface AppContextType {
  data: AppData;
  setData: React.Dispatch<React.SetStateAction<AppData>>;
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  isLoading: boolean;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

// Helper to scroll to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [data, setData] = useState<AppData>(INITIAL_DATA);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Attempt to load saved content from LocalStorage
    const saved = localStorage.getItem('elyon_school_data');
    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse local data", e);
      }
    }
    
    // Simulate initial loading/branding delay
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-white transition-opacity duration-500">
        <div className="relative w-24 h-24 mb-8">
           <div className="absolute inset-0 border-4 border-school-green/20 rounded-full"></div>
           <div className="absolute inset-0 border-4 border-school-green border-t-transparent rounded-full animate-spin"></div>
           <div className="absolute inset-0 flex items-center justify-center font-black text-school-green text-3xl">
             {data.content.general.schoolName.charAt(0)}
           </div>
        </div>
        <h2 className="text-xl font-bold text-school-green animate-pulse tracking-widest uppercase">
          {data.content.general.schoolName}
        </h2>
        <p className="text-[10px] text-school-brown font-bold tracking-[0.3em] uppercase mt-2">
          {data.content.general.schoolTagline}
        </p>
      </div>
    );
  }

  return (
    <AppContext.Provider value={{ data, setData, isAdmin, setIsAdmin, isLoading }}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin/login" element={<Login />} />
              <Route 
                path="/admin" 
                element={isAdmin ? <AdminDashboard /> : <Navigate to="/admin/login" replace />} 
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;