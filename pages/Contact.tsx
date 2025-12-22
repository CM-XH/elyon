
import React from 'react';
import { useApp } from '../App';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { data } = useApp();
  const { contact } = data.content;

  return (
    <div className="bg-white">
      <section className="bg-school-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/70">Have questions? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-school-green"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-school-green"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-school-green"
                    placeholder="Admissions Enquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-school-green resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button className="bg-school-green text-white px-8 py-4 rounded-full font-bold w-full flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>

            {/* Info & Map */}
            <div className="space-y-8">
              <div className="bg-slate-50 p-10 rounded-3xl space-y-8 border border-slate-100">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-school-green flex items-center justify-center shrink-0">
                    <MapPin className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Location</h4>
                    <p className="text-slate-600">{contact.address}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-school-brown flex items-center justify-center shrink-0">
                    <Phone className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                    <p className="text-slate-600">{contact.phone}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-school-green flex items-center justify-center shrink-0">
                    <Mail className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Address</h4>
                    <p className="text-slate-600">{contact.email}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden h-[300px] border-4 border-slate-50 shadow-inner">
                <iframe 
                  src={contact.mapUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
