
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Settings } from 'lucide-react';
import { useApp } from '../App';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAdmin, data } = useApp();
  const { general } = data.content;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative w-14 h-14 flex items-center justify-center bg-white rounded-full border-2 border-school-green shadow-sm overflow-hidden transition-all group-hover:shadow-md">
                <img 
                  src={general.logoUrl} 
                  alt={`${general.schoolName} Badge`} 
                  className="w-10 h-10 object-contain z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-school-green text-white font-bold text-xl">
                  {general.schoolName.charAt(0)}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-school-green leading-tight tracking-tight uppercase">{general.schoolName}</span>
                <span className="text-[10px] text-school-brown uppercase tracking-widest font-semibold">{general.schoolTagline}</span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-school-green ${
                  isActive(link.path) ? 'text-school-green font-bold border-b-2 border-school-green' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {isAdmin && (
              <Link
                to="/admin"
                className="flex items-center gap-1 bg-school-brown text-white px-3 py-1.5 rounded-md text-xs hover:bg-opacity-90"
              >
                <Settings size={14} /> Admin
              </Link>
            )}
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-school-green focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 text-base font-medium rounded-lg ${
                isActive(link.path) ? 'bg-school-green text-white' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
