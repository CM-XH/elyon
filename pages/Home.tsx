
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Trophy, Heart } from 'lucide-react';
import { useApp } from '../App';

const Home: React.FC = () => {
  const { data } = useApp();
  const { home } = data.content;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={home.heroImage} 
            alt="School Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-school-green/90 via-school-green/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              {home.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              {home.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/admissions" 
                className="bg-school-brown hover:bg-opacity-90 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2"
              >
                Apply Now <ArrowRight size={20} />
              </Link>
              <Link 
                to="/about" 
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold transition-all border border-white/30"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-school-green font-bold tracking-widest uppercase mb-4 block">{home.welcomeTagline}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-school-green mb-8 max-w-3xl mx-auto leading-tight">
            {home.welcomeHeading}
          </h2>
          <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed">
            {home.welcomeMessage}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<BookOpen className="text-white" size={32} />}
              title="Academics"
              desc="Comprehensive curriculum tailored for early years and primary levels."
              color="bg-school-green"
            />
            <FeatureCard 
              icon={<Users className="text-white" size={32} />}
              title="Qualified Teachers"
              desc="Experienced educators dedicated to nurturing child potential."
              color="bg-school-brown"
            />
            <FeatureCard 
              icon={<Trophy className="text-white" size={32} />}
              title="Co-Curricular"
              desc="Holistic development through sports, music, drama, and clubs."
              color="bg-school-green"
            />
            <FeatureCard 
              icon={<Heart className="text-white" size={32} />}
              title="Values-Based"
              desc="Instilling discipline, integrity, and godly character."
              color="bg-school-brown"
            />
          </div>
        </div>
      </section>

      {/* Stats / CTA */}
      <section className="py-20 bg-school-green text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">{home.statsHeading}</h2>
            <div className="space-y-6">
              {home.statsItems.map(stat => (
                <div key={stat.n} className="flex gap-4">
                  <div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">{stat.n}</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{stat.t}</h4>
                    <p className="text-white/70">{stat.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative">
             <img 
               src={home.statsImage} 
               alt="School Stats Feature" 
               className="rounded-2xl shadow-2xl relative z-10 aspect-video object-cover w-full h-full"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800';
               }}
             />
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-school-brown rounded-2xl z-0"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, desc: string, color: string }> = ({ icon, title, desc, color }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-school-green hover:translate-y-[-8px] transition-all">
    <div className={`${color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Home;
