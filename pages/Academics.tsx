
import React from 'react';
import { Book, Palette, Music, Dumbbell, Code, Globe } from 'lucide-react';
import { useApp } from '../App';

const Academics: React.FC = () => {
  const { data } = useApp();
  const { academics } = data.content;

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-school-brown py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Excellence</h1>
          <p className="text-white/80 max-w-2xl mx-auto">{academics.intro}</p>
        </div>
      </div>

      {/* Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Kindergarten */}
            <div>
              <div className="h-[300px] mb-8 overflow-hidden rounded-3xl shadow-lg">
                <img src={academics.kinderImage} className="w-full h-full object-cover" alt="Kindergarten" />
              </div>
              <h2 className="text-3xl font-bold text-school-green mb-6">{academics.kinderTitle}</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                {academics.kinderDesc}
              </p>
              <ul className="space-y-3">
                {["Baby, Middle, and Top Classes", "Literacy and Numeracy foundations", "Creative arts and sensory play"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-2 h-2 bg-school-green rounded-full"></div> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Primary */}
            <div>
              <div className="h-[300px] mb-8 overflow-hidden rounded-3xl shadow-lg">
                <img src={academics.primaryImage} className="w-full h-full object-cover" alt="Primary" />
              </div>
              <h2 className="text-3xl font-bold text-school-green mb-6">{academics.primaryTitle}</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                {academics.primaryDesc}
              </p>
              <ul className="space-y-3">
                {["Lower Primary (P.1 - P.3)", "Upper Primary (P.4 - P.7)", "Dedicated remedial programs"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-2 h-2 bg-school-brown rounded-full"></div> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Curricular */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-school-green mb-4">Beyond the Classroom</h2>
            <p className="text-slate-600">A holistic education includes talents and physical wellness.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <ActivityBox icon={<Music />} label="Music & Drama" />
            <ActivityBox icon={<Dumbbell />} label="Sports & Games" />
            <ActivityBox icon={<Palette />} label="Fine Art" />
            <ActivityBox icon={<Globe />} label="Languages" />
            <ActivityBox icon={<Book />} label="Reading Club" />
            <ActivityBox icon={<Code />} label="Computer Lab" />
          </div>
        </div>
      </section>
    </div>
  );
};

const ActivityBox: React.FC<{ icon: React.ReactNode, label: string }> = ({ icon, label }) => (
  <div className="bg-white p-6 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
    <div className="text-school-green">{icon}</div>
    <span className="text-sm font-bold text-slate-700 text-center">{label}</span>
  </div>
);

export default Academics;
