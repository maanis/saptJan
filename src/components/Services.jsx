import React from 'react';
import { Search, UserCheck, MessageCircle, Crown } from 'lucide-react';
import { useNavigate } from 'react-router';

function Services() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Our Services</h1>
                <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                    Discover our comprehensive range of matrimonial services designed to help you find your perfect match.
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Free Membership */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className="flex items-center mb-6">
                            <Search className="w-8 h-8 text-rose-600 mr-4" />
                            <h2 className="text-2xl font-semibold text-gray-900">Free Membership</h2>
                        </div>
                        <ul className="space-y-3 text-gray-600">
                            <li>• Create and manage your profile</li>
                            <li>• Basic search functionality</li>
                            <li>• View limited profiles daily</li>
                            <li>• Basic matching suggestions</li>
                        </ul>
                        <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-full transition-colors">
                            Get Started Free
                        </button>
                    </div>

                    {/* Premium Membership */}
                    <div className="bg-rose-600 p-8 rounded-lg shadow-md text-white">
                        <div className="flex items-center mb-6">
                            <Crown className="w-8 h-8 mr-4" />
                            <h2 className="text-2xl font-semibold">Premium Membership</h2>
                        </div>
                        <ul className="space-y-3">
                            <li>• All Free features included</li>
                            <li>• Advanced search filters</li>
                            <li>• Unlimited profile views</li>
                            <li>• Priority customer support</li>
                            <li>• View contact details</li>
                            <li>• Chat with interested profiles</li>
                        </ul>
                        <button className="mt-6 w-full bg-white hover:bg-gray-100 text-rose-600 font-semibold py-3 px-6 rounded-full transition-colors">
                            Upgrade to Premium
                        </button>
                    </div>

                    {/* Additional Services */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className="flex items-center mb-6">
                            <UserCheck className="w-8 h-8 text-rose-600 mr-4" />
                            <h2 className="text-2xl font-semibold text-gray-900">Profile Verification</h2>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Get your profile verified with our thorough verification process to build trust and credibility.
                        </p>
                        <ul className="space-y-3 text-gray-600">
                            <li>• Document verification</li>
                            <li>• Background check</li>
                            <li>• Verified badge on profile</li>
                        </ul>
                        <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-full transition-colors">
                            Get Verified
                        </button>
                    </div>

                    {/* Personalized Matchmaking */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className="flex items-center mb-6">
                            <MessageCircle className="w-8 h-8 text-rose-600 mr-4" />
                            <h2 className="text-2xl font-semibold text-gray-900">Personal Assistance</h2>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Get personalized assistance from our relationship experts to find your perfect match.
                        </p>
                        <ul className="space-y-3 text-gray-600">
                            <li>• Dedicated relationship manager</li>
                            <li>• Handpicked matches</li>
                            <li>• Profile optimization</li>
                            <li>• Regular updates and feedback</li>
                        </ul>
                        <button onClick={() => navigate('/contact')} className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-full transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;