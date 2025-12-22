
import React from 'react';
import { useApp } from '../App';
import { FileDown, CheckCircle2, Info, PhoneCall, GraduationCap } from 'lucide-react';

const Admissions: React.FC = () => {
  const { data } = useApp();
  const { admissions, contact } = data.content;

  return (
    <div className="bg-white">
      <section className="bg-school-green py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-school-brown/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <GraduationCap className="mx-auto mb-6 opacity-50" size={64} />
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Enroll Your Child</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Join our community of excellence. Find out how to enroll your child in the kindergarten or primary section.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Process */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-school-green mb-12 flex items-center gap-3">
                <div className="w-1.5 h-10 bg-school-brown rounded-full"></div> Our Enrollment Process
              </h2>
              <div className="space-y-12">
                {admissions.process.map((step, idx) => (
                  <div key={idx} className="flex gap-8 relative group">
                    {idx < admissions.process.length - 1 && (
                      <div className="absolute left-7 top-16 bottom-[-32px] w-0.5 bg-slate-100 group-hover:bg-school-green/20 transition-colors"></div>
                    )}
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 text-school-green border border-slate-200 flex items-center justify-center font-black text-2xl shrink-0 group-hover:bg-school-green group-hover:text-white transition-all shadow-sm">
                      {idx + 1}
                    </div>
                    <div className="pt-2">
                      <p className="text-slate-700 font-bold text-xl leading-snug">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Requirements */}
            <div className="space-y-8">
              <div className="bg-slate-50 p-10 rounded-[3rem] h-fit border border-slate-200 shadow-sm">
                <h3 className="text-xl font-black text-school-green mb-8 border-b pb-6 uppercase tracking-widest text-center">Admission Requirements</h3>
                <ul className="space-y-5">
                  {admissions.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-base text-slate-600 font-bold">
                      <div className="mt-1 bg-school-green/10 p-1 rounded-full shrink-0">
                        <CheckCircle2 className="text-school-green" size={16} />
                      </div>
                      <span className="leading-tight">{req}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 pt-10 border-t border-slate-200">
                  <h4 className="font-black mb-6 text-slate-800 text-sm uppercase tracking-widest">Download Resources</h4>
                  <div className="space-y-4">
                    <DownloadLink label="Admission Form (General)" />
                    <DownloadLink label="School Prospectus" />
                  </div>
                </div>
              </div>

              <div className="bg-school-brown p-8 rounded-[2rem] text-white flex items-center gap-6">
                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                   <PhoneCall size={28} />
                 </div>
                 <div>
                   <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Inquiry Line</p>
                   <p className="text-lg font-black">{contact.phone.split('/')[0]}</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Fees / Inquiry Section */}
      <section className="py-24 bg-school-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">{admissions.ctaHeading}</h2>
          <p className="text-white/80 mb-12 text-xl leading-relaxed">
            {admissions.ctaText}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href={`tel:${contact.phone}`}
              className="bg-school-brown text-white px-10 py-4 rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-black/20 flex items-center gap-2"
            >
              Call Admission Office
            </a>
            <button className="bg-white/10 border-2 border-white/20 text-white px-10 py-4 rounded-2xl font-black hover:bg-white/20 transition-all backdrop-blur-md">
              Request Detailed Fees Structure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const DownloadLink = ({ label }: { label: string }) => (
  <a href="#" className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 hover:border-school-green hover:shadow-lg transition-all text-slate-700">
    <span className="text-sm font-black">{label}</span>
    <FileDown size={22} className="text-school-green" />
  </a>
);

export default Admissions;
