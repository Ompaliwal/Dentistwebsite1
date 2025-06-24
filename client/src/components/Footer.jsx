import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#031B3A] text-white pt-12 px-4 rounded-t-3xl font-jakarta">
      <div className="text-center text-sm text-gray-300 mb-8 max-w-xl mx-auto">
        Dentistry is your premier dental care destination, committed to delivering exceptional treatments with a personalized touch.
      </div>

      <hr className="border-gray-700 mb-8" />

      {/* Grid Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto text-sm text-gray-300">
        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-3">● Contact Us</h4>
          <p className="flex items-center gap-2"><MapPin size={16} /> 123 Smile Avenue, Dental City, CA</p>
          <p className="flex items-center gap-2 mt-2"><Phone size={16} /> +(1 555)-123-4567</p>
          <p className="flex items-center gap-2 mt-2"><Mail size={16} /> contact@dentistryhub.com</p>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-white mb-3">● Follow Us</h4>
          <ul className="space-y-1">
            <li className="hover:text-white cursor-pointer flex items-center gap-2"><Instagram size={16} /> Instagram</li>
            <li className="hover:text-white cursor-pointer flex items-center gap-2"><Linkedin size={16} /> LinkedIn</li>
            <li className="hover:text-white cursor-pointer flex items-center gap-2"><Twitter size={16} /> X (Twitter)</li>
            <li className="hover:text-white cursor-pointer">Redite</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">● Useful Links</h4>
          <ul className="space-y-1">
            <li className="hover:text-white cursor-pointer">Licensing</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Work Hours */}
        <div>
          <h4 className="font-semibold text-white mb-3">● Work Hours</h4>
          <ul className="space-y-1">
            <li>Monday – Friday <span className="float-right">9:00 AM – 6:00 PM</span></li>
            <li>Saturday <span className="float-right">10:00 AM – 3:00 PM</span></li>
            <li>Sunday <span className="float-right">Closed</span></li>
          </ul>
        </div>
      </div>

      {/* Logo and Footer Note */}
      <div className="mt-12 text-center">
        <h2 className="text-5xl font-bold text-white mb-4">Dentistry Hub</h2>
     
      </div>

      <div className="py-6" />
    </footer>
  );
};

export default Footer;
