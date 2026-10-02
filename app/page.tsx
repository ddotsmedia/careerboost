'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, BarChart3, Users, FileText, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#001f3f] to-[#d4af37] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CB</span>
            </div>
            <span className="font-bold text-lg text-[#001f3f]">CareerBoost</span>
          </div>
          <Link
            href="/admin"
            className="px-6 py-2 bg-[#001f3f] text-white rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2"
          >
            Admin Panel
            <ArrowRight size={16} />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#001f3f] via-[#0a3a6b] to-[#001f3f]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#d4af37]/20 border border-[#d4af37] rounded-full">
            <span className="text-[#d4af37] text-sm font-semibold">AI-Powered Career Development</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Accelerate Your Career Journey
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get professional CV reviews, expert guidance, and personalized career coaching powered by artificial intelligence. Transform your resume and land your dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admin"
              className="px-8 py-4 bg-[#d4af37] text-[#001f3f] rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group"
            >
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] rounded-lg font-bold hover:bg-[#d4af37]/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#001f3f] mb-4 text-center">
            Comprehensive Career Solutions
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Everything you need to elevate your professional profile and advance your career
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'CV Reviews',
                description: 'Professional feedback on your resume from industry experts powered by AI analysis',
              },
              {
                icon: Users,
                title: 'Expert Guidance',
                description: 'One-on-one coaching sessions with career professionals and mentors',
              },
              {
                icon: Zap,
                title: 'AI Insights',
                description: 'Data-driven recommendations to optimize your resume and job applications',
              },
              {
                icon: BarChart3,
                title: 'Progress Tracking',
                description: 'Monitor your career development with detailed analytics and progress reports',
              },
              {
                icon: CheckCircle2,
                title: 'Interview Prep',
                description: 'Comprehensive interview preparation with practice questions and feedback',
              },
              {
                icon: Users,
                title: 'Community Network',
                description: 'Connect with professionals and expand your professional network',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#d4af37] hover:shadow-lg transition-all"
              >
                <feature.icon size={32} className="text-[#d4af37] mb-4" />
                <h3 className="text-xl font-bold text-[#001f3f] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10,000+', label: 'Users Helped' },
              { number: '95%', label: 'Success Rate' },
              { number: '50+', label: 'Expert Reviewers' },
              { number: '4.9/5', label: 'Average Rating' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-[#d4af37] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#001f3f] mb-4 text-center">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Flexible pricing designed to fit your career development needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$29',
                features: ['1 CV Review', 'Email Support', 'Basic Insights'],
              },
              {
                name: 'Complete',
                price: '$79',
                features: ['5 CV Reviews', 'Priority Support', 'Advanced Insights', 'Interview Prep'],
                highlight: true,
              },
              {
                name: 'Premium',
                price: '$199',
                features: ['Unlimited Reviews', '24/7 Support', 'Full AI Features', 'Personal Mentor'],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-xl border-2 transition-all ${
                  plan.highlight
                    ? 'border-[#d4af37] bg-white shadow-2xl scale-105'
                    : 'border-gray-200 bg-white hover:border-[#d4af37]'
                }`}
              >
                <h3 className="text-2xl font-bold text-[#001f3f] mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-[#d4af37] mb-6">
                  {plan.price}
                  <span className="text-sm text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 size={18} className="text-[#d4af37]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                    plan.highlight
                      ? 'bg-[#d4af37] text-[#001f3f] hover:bg-opacity-90'
                      : 'bg-[#001f3f] text-white hover:bg-opacity-90'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#001f3f] to-[#0a3a6b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who have advanced their careers with CareerBoost
          </p>
          <Link
            href="/admin"
            className="inline-block px-8 py-4 bg-[#d4af37] text-[#001f3f] rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center gap-2 group"
          >
            Start Your Journey Today
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001f3f] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">CareerBoost</h4>
              <p className="text-gray-400 text-sm">Accelerating careers through AI-powered guidance and expert reviews</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#d4af37] transition">CV Reviews</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition">Interview Prep</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition">Career Coaching</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#d4af37] transition">About</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition">Blog</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#d4af37] transition">Privacy</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition">Terms</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 CareerBoost. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
