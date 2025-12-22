
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { useApp } from '../App';

const Footer: React.FC = () => {
  const { data } = useApp();
  const { contact } = data.content;

  return (
    <footer className="bg-school-green text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Elyon School</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Empowering the next generation with quality education and moral values. We are located in the heart of Kampala, providing a serene environment for learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 underline decoration-school-brown underline-offset-8">Quick Links</h3>
            <ul className="space-y-4 text-white/80 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Our History</Link></li>
              <li><Link to="/academics" className="hover:text-white transition-colors">Academic Programs</Link></li>
              <li><Link to="/admissions" className="hover:text-white transition-colors">Admission Process</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">Latest School News</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Photo Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 underline decoration-school-brown underline-offset-8">Contact Us</h3>
            <ul className="space-y-4 text-white/80 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-school-brown shrink-0" size={20} />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-school-brown shrink-0" size={20} />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-school-brown shrink-0" size={20} />
                <span>{contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 underline decoration-school-brown underline-offset-8">Admission Inquiry</h3>
            <p className="text-white/80 text-sm mb-4">Want to know more about admissions? Send us your email.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-school-brown"
              />
              <button className="bg-school-brown text-white py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                Send Request
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Elyon Kindergarten and Primary School. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/admin/login" className="hover:text-white font-bold">Staff Login</Link>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
