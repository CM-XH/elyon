
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../App';
import { Lock, User, ArrowLeft } from 'lucide-react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setIsAdmin, data } = useApp();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setIsAdmin(true);
      navigate('/admin');
    } else {
      setError('Invalid credentials. Please use the authorized Staff account.');
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 px-4 py-12">
      <Link 
        to="/" 
        className="mb-8 flex items-center gap-2 text-slate-500 hover:text-school-green font-bold transition-colors group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Back to Website
      </Link>

      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl w-full max-w-md border border-slate-100">
        <div className="flex flex-col items-center mb-10">
          <div className="w-24 h-24 mb-6 bg-white rounded-full flex items-center justify-center border-4 border-school-green shadow-sm overflow-hidden relative">
            <img 
              src={data.content.general.logoUrl} 
              alt="School Badge" 
              className="w-16 h-16 object-contain z-10"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-school-green text-white font-bold text-4xl">
              {data.content.general.schoolName.charAt(0)}
            </div>
          </div>
          <h1 className="text-2xl font-black text-school-green uppercase tracking-tight">Staff Portal</h1>
          <p className="text-slate-400 text-sm font-medium mt-1">Authorized Access Only</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm mb-6 font-bold border border-red-100 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Username</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-slate-50/30 focus:outline-none focus:ring-2 focus:ring-school-green transition-all"
                placeholder="Staff ID or Username"
                autoComplete="username"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-slate-50/30 focus:outline-none focus:ring-2 focus:ring-school-green transition-all"
                placeholder="Enter password"
                autoComplete="current-password"
              />
            </div>
          </div>
          <button className="w-full bg-school-green text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-opacity-95 transition-all shadow-xl shadow-school-green/20 active:scale-95">
            Log In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            Elyon School Information System v2.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
