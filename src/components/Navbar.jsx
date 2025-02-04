import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full h-[10vh] z-50 bg-white/45 backdrop-blur-sm shadow-md">
            <div className="container h-full mx-auto px-8">
                <div className="flex justify-between items-center h-full">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Heart className="w-8 h-8 text-rose-600" />
                        <span className="text-2xl font-bold text-gray-800">SaptJanm</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-zinc-950 hover:text-rose-600 font-medium transition-colors">
                            Home
                        </a>
                        <a href="#" className="text-zinc-950 hover:text-rose-600 font-medium transition-colors">
                            About
                        </a>
                        <a href="#" className="text-zinc-950 hover:text-rose-600 font-medium transition-colors">
                            Services
                        </a>
                        <a href="#" className="text-zinc-950 hover:text-rose-600 font-medium transition-colors">
                            Contact Us
                        </a>
                        <button className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors">
                            Register Now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        <div className="flex flex-col space-y-4">
                            <a href="#" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
                                Home
                            </a>
                            <a href="#" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
                                About
                            </a>
                            <a href="#" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
                                Services
                            </a>
                            <a href="#" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
                                Contact Us
                            </a>
                            <button className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors w-full">
                                Register Now
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;