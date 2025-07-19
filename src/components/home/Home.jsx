import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Helmet>
        <title>Bhanga Cannabis | Welcome</title>
        <meta name="description" content="Welcome to Bhanga Cannabis. Shop legal cannabis products in Canada." />
        <link rel="canonical" href="https://yourdomain.com/home" />
      </Helmet>
      {/* Navigation */}
      <nav className="px-6 py-4 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">Logo</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Features</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">About</a>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Build Amazing Digital Experiences
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Our platform helps you create beautiful websites and applications with ease. Join thousands of satisfied customers today.
            </p>
            <div className="flex space-x-4">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-medium">
                Start Free Trial
              </button>
              <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition duration-300 font-medium">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
              alt="Hero" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Fast Performance',
                desc: 'Lightning fast load times and smooth animations'
              },
              {
                icon: '🎨',
                title: 'Beautiful Design',
                desc: 'Modern, clean design that converts visitors'
              },
              {
                icon: '🔒',
                title: 'Secure Platform',
                desc: 'Enterprise-grade security for your peace of mind'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join over 10,000 businesses that trust our platform to deliver exceptional results.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 font-medium text-lg">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-indigo-300 transition">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-300 transition">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-300 transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-indigo-300 transition">Features</a></li>
                <li><a href="#" className="hover:text-indigo-300 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-indigo-300 transition">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-indigo-300 transition">Help Center</a></li>
                <li><a href="#" className="hover:text-indigo-300 transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-indigo-300 transition">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Subscribe</h3>
              <p className="mb-4">Get the latest news and updates</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l text-gray-800 w-full"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r hover:bg-indigo-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>© 2023 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;