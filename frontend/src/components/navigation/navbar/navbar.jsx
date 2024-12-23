import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white py-4">
            <div className="max-w-screen-lg mx-auto flex justify-between items-center">
                {/* Logo/Brand name */}
                <div className="text-xl mx-5 font-semibold">Assessment</div>

                {/* Navigation Links */}
                <div className="space-x-6 mx-5">
                    <a href="#home" className="text-sm hover:text-gray-400 transition">Home</a>
                    <a href="#about" className="text-sm hover:text-gray-400 transition">About</a>
                    <a href="#services" className="text-sm hover:text-gray-400 transition">Services</a>
                    <a href="#contact" className="text-sm hover:text-gray-400 transition">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
