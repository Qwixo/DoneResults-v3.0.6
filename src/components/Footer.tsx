import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-10">
      <div className="container mx-auto px-4 text-center space-y-4">
        {/* Logo */}
        <img 
          src="https://i.imgur.com/kpHtGKX.png" 
          alt="DoneResults Logo" 
          className="mx-auto w-40 md:w-52"
        />

        {/* Contact + Copyright */}
        <p className="text-sm text-white">
          <a 
            href="mailto:jan.lisy123@gmail.com" 
            className="underline hover:text-teal-400 transition-colors"
          >
            jan.lisy123@gmail.com
          </a> 
          {' '}| DoneResults © 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
