import React from 'react';
import { Link } from 'react-router';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f0f0f0] text-gray-800 py-16 px-4 md:px-[72px]"> {/* Changed background and text color */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"> {/* Removed max-w-7xl and mx-auto */}
        {/* Logo and About Section */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img
              className="w-10 h-10"
              src="/car-3-11.svg" // Assuming a white or light version of logo for dark bg - may need adjustment for light bg
              alt="OpLEL Logo"
            />
            <span className="text-2xl font-bold">OpLEL</span> {/* Inherits text-gray-800 */}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed"> {/* Changed text color */}
            Your premier destination for car rentals. We offer a wide range of vehicles to suit all your driving needs, from compact cars for city trips to spacious SUVs for family adventures.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-lg font-semibold mb-6 text-gray-800">Quick Links</h5> {/* Ensured text color */}
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-[#ec0868] transition-colors text-gray-700">Home</Link></li> {/* Changed text color */}
            <li><Link to="/vehicles" className="hover:text-[#ec0868] transition-colors text-gray-700">Vehicles</Link></li> {/* Changed text color */}
            <li><Link to="/about" className="hover:text-[#ec0868] transition-colors text-gray-700">About Us</Link></li> {/* Changed text color */}
            <li><Link to="/contact" className="hover:text-[#ec0868] transition-colors text-gray-700">Contact Us</Link></li> {/* Changed text color */}
            <li><Link to="/faq" className="hover:text-[#ec0868] transition-colors text-gray-700">FAQ</Link></li> {/* Changed text color */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-lg font-semibold mb-6 text-gray-800">Contact Us</h5> {/* Ensured text color */}
          <ul className="space-y-3 text-gray-700"> {/* Changed text color */}
            <li className="flex items-start">
              <img src="/map-pin0.svg" alt="Location" className="w-5 h-5 mr-3 mt-1" /> {/* Removed filter */}
              <span>123 Auto Drive, Car City, ST 12345</span>
            </li>
            <li className="flex items-center">
              <img src="/mail0.svg" alt="Email" className="w-5 h-5 mr-3" /> {/* Removed filter */}
              <a href="mailto:contact@oplel.com" className="hover:text-[#ec0868] transition-colors">contact@oplel.com</a>
            </li>
            {/* Add Phone Number if available */}
          </ul>
        </div>

        {/* Newsletter/Social */}
        <div>
          <h5 className="text-lg font-semibold mb-6 text-gray-800">Stay Connected</h5> {/* Ensured text color */}
          <p className="text-gray-600 text-sm mb-4">Subscribe to our newsletter for the latest deals and updates.</p> {/* Changed text color */}
          <form className="flex mb-6">
            <input type="email" placeholder="Your Email" className="bg-white text-gray-800 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#ec0868] w-full border border-gray-300" /> {/* Changed styles */}
            <button type="submit" className="bg-[#ec0868] hover:bg-[#d0075c] text-white px-4 py-2 rounded-r-md transition-colors">
              Subscribe
            </button>
          </form>
          {/* Add Social Media Icons if available */}
        </div>
      </div>
      <div className="mt-12 border-t border-gray-300 pt-8 text-center"> {/* Changed border color */}
        <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} OpLEL Car Rentals. All Rights Reserved.</p> {/* Changed text color */}
      </div>
    </footer>
  );
};
