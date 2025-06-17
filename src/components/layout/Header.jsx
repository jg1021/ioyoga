/*
// src/components/layout/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">A-Pro Yoga</Link>
      <nav className="space-x-4">
        <Link to="/programs" className="hover:underline">Programs</Link>
        <Link to="/teachers" className="hover:underline">Teachers</Link>
        <Link to="/pricing" className="hover:underline">Pricing</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </nav>
    </header>
  );
};

export default Header;*/
// src/components/layout/Header.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  let pg = "Browse";
  let ins = "Instructor";
  let lg = "Login";
  let join = "Try for free";
  let our = "Our Story";

  return (
    <>
      <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900">A-Pro Yoga</Link>
        <div className="flex items-center space-x-6 text-gray-700 font-medium">
          <nav className="hidden md:flex space-x-6">
            <Link to="/programs" className="hover:text-yellow-500 transition">{pg}</Link>
            <Link to="/teachers" className="hover:text-yellow-500 transition">{ins}</Link>
            <Link to="/login" className="hover:text-yellow-500 transition">{lg}</Link>
            <Link to="/pricing" className="hover:text-yellow-500 transition">{join}</Link>
            <Link to="/about" className="hover:text-yellow-500 transition">{our}</Link>
          </nav>
          <button onClick={toggleSidebar} className="md:hidden text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {isOpen && (
        <aside className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-6 md:hidden">
          <button onClick={toggleSidebar} className="mb-4 text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
            <Link to="/" onClick={toggleSidebar}>Home</Link>
            <Link to="/programs" onClick={toggleSidebar}>{pg}</Link>    
            <Link to="/teachers" onClick={toggleSidebar}>{ins}</Link>
            <Link to="/login" onClick={toggleSidebar}>{lg}</Link>
            <Link to="/pricing" onClick={toggleSidebar}>{join}</Link>
            <Link to="/about" onClick={toggleSidebar}>{our}</Link>
          </nav>
        </aside>
      )}
    </>
  );
};

export default Header;