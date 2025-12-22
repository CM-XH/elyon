
import React from 'react';
import { useApp } from '../App';
import { Target, Eye, ShieldCheck, Quote } from 'lucide-react';

const About: React.FC = () => {
  const { data } = useApp();
  const { about } = data.content;

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-school-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our School</h1>
          <p className="text-white/70 max-w-2xl mx-auto">Learn about our history, our values, and the vision that drives us every day.</p>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-school-green mb-6">{about.historyTitle}</h2>
            <div className="h-1 w-20 bg-school-brown mb-8"></div>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              {about.historyText}
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src={about.historyImage} 
              alt="School History" 
              className="rounded-3xl shadow-xl border-8 border-slate-50 object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-school-green/10 text-school-green rounded-full flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-slate-600">{about.vision}</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-school-brown/10 text-school-brown rounded-full flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-slate-600">{about.mission}</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-school-green/10 text-school-green rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Core Values</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {about.values.map(v => (
                  <span key={v} className="bg-school-green/5 text-school-green px-3 py-1 rounded-full text-sm font-medium">{v}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Head Teacher's Message */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-school-brown rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
            <Quote className="absolute top-10 right-10 text-white/10 w-32 h-32" />
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="shrink-0">
                <img 
                  src={about.headTeacherImage} 
                  alt={about.headTeacherName} 
                  className="w-48 h-48 rounded-2xl object-cover border-4 border-white/20"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Message from the Office</h3>
                <h4 className="text-school-brown bg-white inline-block px-3 py-1 rounded-md text-sm font-bold mb-6">
                  {about.headTeacherName} - {about.headTeacherTitle}
                </h4>
                <p className="text-xl italic font-medium leading-relaxed">
                  "{about.headTeacherMessage}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
