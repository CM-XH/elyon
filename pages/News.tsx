
import React, { useState } from 'react';
import { useApp } from '../App';
import { Calendar, ChevronRight, X, Clock, User } from 'lucide-react';
import { NewsItem } from '../types';

const News: React.FC = () => {
  const { data } = useApp();
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-school-brown py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">News & Announcements</h1>
          <p className="text-white/70">Stay updated with the latest happenings at Elyon.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="space-y-12">
          {data.news.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row border border-slate-100 group hover:shadow-md transition-all">
              <div className="md:w-1/3 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover min-h-[250px] group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-school-green text-sm font-bold mb-4 uppercase">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    <span>{new Date(item.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-school-green transition-colors">{item.title}</h2>
                <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed">
                  {item.excerpt}
                </p>
                <button 
                  onClick={() => setSelectedNews(item)}
                  className="text-school-brown font-bold flex items-center gap-1 hover:gap-2 transition-all w-fit"
                >
                  Read More <ChevronRight size={20} />
                </button>
              </div>
            </div>
          ))}

          {data.news.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <p className="text-slate-400 font-medium">No announcements published yet.</p>
            </div>
          )}
        </div>
      </div>

      {/* Read More Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-[2rem] w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="relative h-64 sm:h-80 flex-shrink-0">
              <img src={selectedNews.image} className="w-full h-full object-cover" alt={selectedNews.title} />
              <button 
                onClick={() => setSelectedNews(null)}
                className="absolute top-6 right-6 p-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/40 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8 sm:p-12 overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-6 text-sm font-bold text-school-green uppercase mb-6 tracking-widest">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{new Date(selectedNews.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>Latest News</span>
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-black text-slate-800 mb-8 leading-tight">
                {selectedNews.title}
              </h1>
              
              <div className="prose prose-slate max-w-none">
                <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed italic border-l-4 border-school-brown pl-6">
                  {selectedNews.excerpt}
                </p>
                <div className="text-slate-700 leading-loose text-lg whitespace-pre-wrap">
                  {selectedNews.content}
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-school-green">
                  <User size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Elyon Communications</p>
                  <p className="text-xs text-slate-500">School Admin Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
