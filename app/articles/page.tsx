'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Search, Calendar, User, Tag, Heart } from 'lucide-react';

const ArticlesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Resume Tips', 'Interview Prep', 'Career Growth', 'AI Tools', 'Job Search'];

  const articles = [
    {
      id: 1,
      title: 'AI-Powered Resume Optimization: Land More Interviews',
      excerpt: 'Learn how artificial intelligence can analyze your resume and suggest improvements that increase your chances of getting noticed by recruiters.',
      category: 'Resume Tips',
      author: 'Sarah Johnson',
      date: 'Oct 2, 2026',
      readTime: '8 min read',
      image: 'bg-gradient-to-br from-blue-500 to-purple-600',
      featured: true,
      views: 2847,
    },
    {
      id: 2,
      title: 'Master the STAR Method: Interview Success Blueprint',
      excerpt: 'The STAR method (Situation, Task, Action, Result) is crucial for behavioral interviews. Discover how to structure answers that impress hiring managers.',
      category: 'Interview Prep',
      author: 'Michael Chen',
      date: 'Sep 29, 2026',
      readTime: '6 min read',
      image: 'bg-gradient-to-br from-green-500 to-teal-600',
      featured: true,
      views: 3124,
    },
    {
      id: 3,
      title: 'Career Pivot Guide: Transitioning to Tech in 2026',
      excerpt: 'Making a career change? Here\'s a comprehensive guide to successfully transition into the tech industry, including skills to develop and resources.',
      category: 'Career Growth',
      author: 'Alex Rodriguez',
      date: 'Sep 25, 2026',
      readTime: '12 min read',
      image: 'bg-gradient-to-br from-orange-500 to-red-600',
      featured: true,
      views: 4201,
    },
    {
      id: 4,
      title: 'Resume Keywords That Get Past ATS Systems',
      excerpt: 'Applicant Tracking Systems (ATS) scan resumes for specific keywords. Learn which keywords matter most for your industry and how to incorporate them naturally.',
      category: 'Resume Tips',
      author: 'Emma Wilson',
      date: 'Sep 22, 2026',
      readTime: '7 min read',
      image: 'bg-gradient-to-br from-indigo-500 to-blue-600',
      views: 2456,
    },
    {
      id: 5,
      title: 'Behavioral Interview Questions: 25 Common Questions & Answers',
      excerpt: 'Prepare for behavioral interviews with this comprehensive guide covering the 25 most common questions asked by top companies and how to answer them effectively.',
      category: 'Interview Prep',
      author: 'James Patterson',
      date: 'Sep 20, 2026',
      readTime: '15 min read',
      image: 'bg-gradient-to-br from-pink-500 to-rose-600',
      views: 5678,
    },
    {
      id: 6,
      title: 'Networking in 2026: Digital Strategies That Work',
      excerpt: 'Virtual networking has become essential. Explore modern networking strategies including LinkedIn optimization, online communities, and virtual events.',
      category: 'Career Growth',
      author: 'Lisa Zhang',
      date: 'Sep 18, 2026',
      readTime: '9 min read',
      image: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      views: 1923,
    },
    {
      id: 7,
      title: 'How AI Tools Are Revolutionizing Job Search',
      excerpt: 'Discover cutting-edge AI tools that automate job searching, personalize applications, and increase your chances of landing interviews.',
      category: 'AI Tools',
      author: 'David Kumar',
      date: 'Sep 15, 2026',
      readTime: '10 min read',
      image: 'bg-gradient-to-br from-violet-500 to-purple-600',
      views: 3567,
    },
    {
      id: 8,
      title: 'Salary Negotiation: Get the Compensation You Deserve',
      excerpt: 'Learn proven negotiation tactics, market research methods, and communication strategies to secure the salary and benefits package you\'re worth.',
      category: 'Career Growth',
      author: 'Rebecca Foster',
      date: 'Sep 12, 2026',
      readTime: '11 min read',
      image: 'bg-gradient-to-br from-amber-500 to-orange-600',
      views: 4234,
    },
    {
      id: 9,
      title: 'LinkedIn Profile Optimization: Get Discovered by Recruiters',
      excerpt: 'Your LinkedIn profile is your digital resume. Learn how to optimize every section to attract recruiters and land more opportunities.',
      category: 'Resume Tips',
      author: 'Nicole Thompson',
      date: 'Sep 10, 2026',
      readTime: '8 min read',
      image: 'bg-gradient-to-br from-sky-500 to-cyan-600',
      views: 6789,
    },
  ];

  const filteredArticles =
    selectedCategory === 'All'
      ? articles.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
      : articles.filter(
          (post) =>
            post.category === selectedCategory &&
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const featuredArticles = articles.filter((post) => post.featured);

  return (
    <div className="w-full bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#001f3f] to-[#d4af37] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CB</span>
            </div>
            <span className="font-bold text-lg text-[#001f3f]">CareerBoost</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/articles" className="text-[#d4af37] font-semibold">
              Articles
            </Link>
            <Link href="/admin" className="px-6 py-2 bg-[#001f3f] text-white rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2">
              Admin
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[#001f3f] via-[#0a3a6b] to-[#001f3f]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Career Insights & Tips</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Expert advice, proven strategies, and AI insights to accelerate your career journey
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-8">
            <Search className="absolute left-4 top-4 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-3 rounded-lg bg-white text-[#001f3f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            />
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === 'All' && searchTerm === '' && (
        <section className="py-16 px-6 bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#001f3f] mb-12">Featured Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.id}`}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#d4af37] hover:shadow-xl transition-all"
                >
                  <div className={`h-48 ${article.image}`}></div>
                  <div className="p-6">
                    <div className="inline-block mb-3 px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] text-sm font-semibold rounded-full">
                      {article.category}
                    </div>
                    <h3 className="text-xl font-bold text-[#001f3f] mb-3 group-hover:text-[#d4af37] transition">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {article.date}
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-[#001f3f] text-white'
                    : 'bg-gray-100 text-[#001f3f] hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.id}`}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#d4af37] hover:shadow-lg transition-all flex flex-col"
                >
                  <div className={`h-40 ${article.image}`}></div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="inline-block mb-3 px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] text-xs font-semibold rounded-full w-fit">
                      {article.category}
                    </div>
                    <h3 className="text-lg font-bold text-[#001f3f] mb-2 group-hover:text-[#d4af37] transition line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm flex-grow line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <User size={12} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart size={12} />
                        <span>{article.views}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No articles found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#001f3f] to-[#0a3a6b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get personalized CV reviews, expert coaching, and AI-powered insights
          </p>
          <Link
            href="/admin"
            className="inline-block px-8 py-4 bg-[#d4af37] text-[#001f3f] rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center gap-2 group"
          >
            Start Now
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
                <li>
                  <a href="#" className="hover:text-[#d4af37] transition">
                    CV Reviews
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4af37] transition">
                    Interview Prep
                  </a>
                </li>
                <li>
                  <a href="/articles" className="hover:text-[#d4af37] transition">
                    Articles
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-[#d4af37] transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4af37] transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-[#d4af37] transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4af37] transition">
                    Terms
                  </a>
                </li>
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
};

export default ArticlesPage;
