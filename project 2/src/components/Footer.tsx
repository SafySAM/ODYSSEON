import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-8 py-10 mt-20 text-sm">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h4 className="font-heading text-lg mb-2">Odysseon Holdings Limited</h4>
          <p>Educate & execute financial literacy & competency</p>
          <p className="mt-2">Abu Dhabi, United Arab Emirates</p>
          <p>Email: odysseonfhs@gmail.com</p>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-2">Socials</h4>
          <p>Coming Soon</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;