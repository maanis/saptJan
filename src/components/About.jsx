import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';

function About() {
    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">About SaptJanm</h1>
                    <p className="text-xl text-gray-600 text-center mb-16">
                        Bringing hearts together since 2014, SaptJanm is India's most trusted matrimonial service.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex justify-center mb-4">
                                <Heart className="w-12 h-12 text-rose-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Our Mission</h3>
                            <p className="text-gray-600 text-center">
                                To help individuals find their perfect life partner through a secure and trusted platform.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex justify-center mb-4">
                                <Users className="w-12 h-12 text-rose-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Our Community</h3>
                            <p className="text-gray-600 text-center">
                                Over 1 million successful matches and a growing community of happy couples.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex justify-center mb-4">
                                <Shield className="w-12 h-12 text-rose-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Our Promise</h3>
                            <p className="text-gray-600 text-center">
                                100% verified profiles and a secure platform for your matrimonial journey.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
                        <p className="text-gray-600 mb-4">
                            Founded in 2014, SaptJanm has grown from a small startup to India's leading matrimonial service. Our journey began with a simple mission: to help people find their perfect life partner through a trusted and secure platform.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Today, we serve millions of users across India and the Indian diaspora worldwide. Our success is built on our commitment to authenticity, security, and personalized matchmaking services.
                        </p>
                        <p className="text-gray-600">
                            We understand that finding a life partner is one of life's most important decisions. That's why we combine traditional values with modern technology to create meaningful connections that last a lifetime.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;