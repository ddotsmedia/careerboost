'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2, Heart } from 'lucide-react';

const ArticleDetail = ({ params }: { params: { id: string } }) => {
  const articleData: Record<
    string,
    {
      title: string;
      author: string;
      date: string;
      readTime: string;
      category: string;
      excerpt: string;
      content: string[];
      views: number;
    }
  > = {
    '1': {
      title: 'AI-Powered Resume Optimization: Land More Interviews',
      author: 'Sarah Johnson',
      date: 'Oct 2, 2026',
      readTime: '8 min read',
      category: 'Resume Tips',
      excerpt: 'Learn how artificial intelligence can analyze your resume and suggest improvements that increase your chances of getting noticed by recruiters.',
      content: [
        'In today\'s competitive job market, your resume needs to stand out among thousands of applications. Artificial intelligence has revolutionized how we approach resume writing and optimization, making it easier than ever to create a compelling document that resonates with hiring managers and applicant tracking systems (ATS).',
        'The traditional approach to resume writing often involves guesswork and hoping your document catches the right person\'s attention. However, with AI-powered tools, you can now receive data-driven insights that improve every aspect of your resume.',
        'AI resume analyzers examine your document against industry standards, competitor resumes, and job descriptions. They identify missing keywords, suggest structural improvements, and highlight sections that need strengthening. This process takes minutes instead of hours of manual revision.',
        'One of the biggest advantages of AI optimization is ATS compatibility. Many large companies use automated systems to screen resumes before a human ever sees them. AI tools ensure your resume includes the right keywords and formatting to pass these crucial screening stages.',
        'The best part? You don\'t need to be a professional resume writer to get results. AI tools guide you through improvements step-by-step, suggesting specific changes that will increase your chances of landing interviews.',
        'Start by uploading your current resume to an AI analyzer. Get your baseline score, review the recommendations, and implement the suggested changes. Track how your interview rate improves as you optimize your resume with AI-driven insights.',
      ],
      views: 2847,
    },
    '2': {
      title: 'Master the STAR Method: Interview Success Blueprint',
      author: 'Michael Chen',
      date: 'Sep 29, 2026',
      readTime: '6 min read',
      category: 'Interview Prep',
      excerpt: 'The STAR method (Situation, Task, Action, Result) is crucial for behavioral interviews. Discover how to structure answers that impress hiring managers.',
      content: [
        'Behavioral interviews have become the standard approach for evaluating candidates across industries. Instead of asking what you would do in a hypothetical situation, interviewers ask what you actually did in past experiences.',
        'The STAR method provides a proven framework for answering these questions effectively. By structuring your responses using Situation, Task, Action, and Result, you create compelling stories that demonstrate your capabilities.',
        'Situation: Begin by setting the scene. Describe the context, the company, your role, and what was happening. This helps the interviewer understand the environment and constraints you were working within.',
        'Task: Explain the specific challenge or objective you faced. What problem needed solving? What goal were you working toward? Make it clear why this task was important and what was at stake.',
        'Action: This is where you shine. Detail the specific steps you took to address the challenge. Focus on your individual contributions and decisions. Use "I" statements rather than "we" to highlight your personal role.',
        'Result: Conclude with concrete outcomes. What happened because of your actions? Use metrics and specifics: increased sales by 23%, reduced customer complaints by 40%, improved team morale scores. Always tie results back to business impact.',
      ],
      views: 3124,
    },
    '3': {
      title: 'Career Pivot Guide: Transitioning to Tech in 2026',
      author: 'Alex Rodriguez',
      date: 'Sep 25, 2026',
      readTime: '12 min read',
      category: 'Career Growth',
      excerpt: 'Making a career change? Here\'s a comprehensive guide to successfully transition into the tech industry, including skills to develop and resources.',
      content: [
        'A career pivot to tech is more achievable in 2026 than ever before. The industry\'s rapid growth, diverse roles, and increasing recognition of alternative backgrounds have created unprecedented opportunities for career changers.',
        'The first step in transitioning to tech is identifying which area aligns with your interests and existing skills. Tech isn\'t just coding. There are roles in product management, design, project management, sales, marketing, operations, and more.',
        'If you\'re interested in software development, expect to invest 3-6 months in intensive learning. Bootcamps, online courses, and self-study programs can accelerate your journey. Focus on practical projects you can showcase to potential employers.',
        'For non-technical roles like product management or design, your previous experience becomes a significant asset. Tech companies value people who bring diverse perspectives from other industries.',
        'Build a portfolio that demonstrates your skills. For developers, create GitHub projects. For designers, build a visual portfolio. For PMs, document case studies showing how you\'ve solved problems.',
        'Network actively. Attend tech meetups, join online communities, and connect with people in your target role. Personal connections often lead to opportunities that aren\'t posted publicly.',
        'Consider contract or freelance work initially. Short-term projects help you build experience, expand your network, and transition into full-time roles. Many tech professionals started this way.',
      ],
      views: 4201,
    },
  };

  const article = articleData[params.id];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#001f3f] mb-4">Article Not Found</h1>
          <Link href="/articles" className="text-[#d4af37] hover:underline">
            ← Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#001f3f] to-[#d4af37] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CB</span>
            </div>
            <span className="font-bold text-lg text-[#001f3f]">CareerBoost</span>
          </Link>
          <Link href="/articles" className="flex items-center gap-2 text-[#001f3f] hover:text-[#d4af37] transition">
            <ArrowLeft size={18} />
            Back to Articles
          </Link>
        </div>
      </nav>

      {/* Article Header */}
      <article className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-block mb-4 px-4 py-2 bg-[#d4af37]/20 text-[#d4af37] text-sm font-semibold rounded-full">
              {article.category}
            </div>
            <h1 className="text-5xl font-bold text-[#001f3f] mb-6 leading-tight">{article.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="text-lg text-gray-700 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Article Footer */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition text-[#001f3f] font-semibold">
                  <Heart size={18} />
                  {article.views}
                </button>
              </div>
              <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#d4af37] text-[#001f3f] hover:bg-opacity-90 transition font-semibold">
                <Share2 size={18} />
                Share
              </button>
            </div>

            {/* Author Card */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-[#001f3f] mb-2">About the Author</h3>
              <p className="text-gray-600">
                {article.author} is a career development expert with over 10 years of experience helping professionals advance their careers. They specialize in resume optimization, interview preparation, and career transitions.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#001f3f] mb-8">More Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {['Resume Tips', 'Interview Prep'].map((category, idx) => (
              <Link
                key={idx}
                href="/articles"
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#d4af37] hover:shadow-lg transition"
              >
                <div className="inline-block mb-3 px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] text-xs font-semibold rounded-full">
                  {category}
                </div>
                <h3 className="text-lg font-bold text-[#001f3f] mb-2">Explore more {category} articles</h3>
                <p className="text-gray-600 text-sm">Discover proven strategies and expert tips to advance your career.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#001f3f] to-[#0a3a6b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-gray-300 mb-8">Get personalized feedback and expert guidance from CareerBoost</p>
          <Link
            href="/admin"
            className="inline-block px-8 py-4 bg-[#d4af37] text-[#001f3f] rounded-lg font-bold hover:bg-opacity-90 transition"
          >
            Get Started Today
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

export default ArticleDetail;
