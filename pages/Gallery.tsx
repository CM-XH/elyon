
import React, { useState } from 'react';
import { useApp } from '../App';
import { X, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../types';

const Gallery: React.FC = () => {
  const { data } = useApp();
  const [filter, setFilter] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Classrooms', 'Events', 'Sports', 'Activities'];
  const filteredGallery = filter === 'All' 
    ? data.gallery 
    : data.gallery.filter(item => item.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-school-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
          <p className="text-white/70">A glimpse into the vibrant life at Elyon School.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                filter === cat 
                  ? 'bg-school-green text-white shadow-lg shadow-school-green/20' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedImage(item)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all h-[300px] cursor-pointer"
            >
              <img 
                src={item.url} 
                alt={item.caption} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                   <ZoomIn size={24} />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <span className="text-school-brown bg-white inline-block w-fit px-2 py-0.5 rounded text-[10px] font-bold uppercase mb-2">
                  {item.category}
                </span>
                <p className="text-white font-bold">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredGallery.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400">No images found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[110]"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X size={32} />
          </button>

          <div 
            className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative group w-full flex justify-center">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.caption} 
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border-4 border-white/10"
              />
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm px-8 py-4 rounded-3xl border border-white/10 max-w-lg">
              <span className="text-school-brown bg-white inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase mb-2 tracking-widest">
                {selectedImage.category}
              </span>
              <p className="text-white text-xl font-bold">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
