import React from 'react';
import { Heart, Search, Users, ArrowRight } from 'lucide-react';

function Hero() {
    return (
        <div className="relative  max-md:min-h-screen lg:overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://www.dipakstudios.com/gallery/14594121173.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex flex-col justify-center">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h1 className="text-5xl mt-8 font-bold mb-6 leading-tight">
                        Find Your Perfect Match with SaptJanm
                    </h1>
                    <p className="text-xl md:text-2xl mb-12 text-gray-200">
                        Begin your journey to finding true love with India's most trusted matrimonial service
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="flex flex-col items-center">
                            <div className="bg-white/10 p-4 rounded-full mb-2">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold">Verified Profiles</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-white/10 p-4 rounded-full mb-4">
                                <Search className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold">Smart Matching</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-white/10 p-4 rounded-full mb-4">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold">Success Stories</h3>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button className="group bg-rose-600 hover:bg-rose-700 text-white text-xl px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto">
                        Start Your Journey Today
                        <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Trust Indicators */}
                    <div className="mt-12 text-gray-300">
                        <p className="text-sm">Trusted by millions of Indians worldwide</p>
                        <p className="text-xs mt-2">✨ 10+ Years of Experience | 1M+ Success Stories | 100% Secure</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;