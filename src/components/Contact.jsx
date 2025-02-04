import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Contact Us</h1>
          <p className="text-xl text-gray-600 text-center mb-16">
            We're here to help you on your journey to finding love. Get in touch with us.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-rose-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 1800-123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-rose-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">support@saptjanm.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-rose-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">Office</p>
                      <p className="text-gray-600">123 Wedding Street, Mumbai, India</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-rose-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">Hours</p>
                      <p className="text-gray-600">Mon-Sat: 9:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-full transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;