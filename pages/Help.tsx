import React from "react";
import { Link } from "react-router-dom";
import {
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  Sparkles,
  ArrowRight,
  Bot,
  Users,
} from "lucide-react";

export const Help: React.FC = () => {
  const faqs = [
    {
      q: "What is Angrezzify?",
      a: "Angrezzify is a youth-focused English communication platform built for India. You learn through AI-powered speaking practice, real-life conversation lessons, and confidence-building modules.",
    },
    {
      q: "Who is this platform for?",
      a: "Students, job seekers, and young professionals who want to improve their fluency, reduce hesitation, and speak English confidently in real life.",
    },
    {
      q: "How long does it take to improve fluency?",
      a: "Most learners see noticeable improvement in 30–45 days with consistent AI practice and lesson completion.",
    },
    {
      q: "Is AI speaking practice unlimited?",
      a: "Yes. You can practice as many conversations as you want — interviews, office communication, presentations, and daily life scenarios.",
    },
    {
      q: "Are these programs beginner friendly?",
      a: "Absolutely. The 3–6 month programs take you from basic to advanced English step-by-step.",
    },
    {
      q: "Do you offer practice for interviews?",
      a: "Yes, Angrezzify includes complete interview English practice through AI + real-life scenarios to help you crack job placements.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24 dark:text-gray-100">

      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),transparent_60%)]"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl font-extrabold mb-2 flex items-center gap-3">
            <HelpCircle className="w-10 h-10" /> Help & Support
          </h1>
          <p className="text-purple-100 text-lg">
            We're here to support your English learning journey.
          </p>
        </div>
      </div>

      {/* ================= FAQ SECTION ================= */}
      <div className="max-w-4xl mx-auto px-6 mt-12">

        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-5">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.a}</p>
            </div>
          ))}
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>

          <div className="grid sm:grid-cols-2 gap-6">

            {/* AI Practice */}
            <Link
              to="/search"
              className="p-6 bg-purple-600 text-white rounded-2xl shadow-lg hover:bg-purple-700 transition flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-lg">Start AI Speaking Practice</h3>
                <p className="text-sm text-purple-200">Try conversation AI</p>
              </div>
              <Bot className="w-10 h-10" />
            </Link>

            {/* Browse Courses */}
            <Link
              to="/courses"
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg transition flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-lg">Browse Courses</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Explore 3–6 month programs
                </p>
              </div>
              <Users className="w-10 h-10 text-purple-600" />
            </Link>
          </div>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our support team is here to help with anything related to your learning.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:support@angrezzify.com"
              className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            >
              <Mail className="w-6 h-6 text-purple-600" />
              <span>Email: support@angrezzify.com</span>
            </a>

            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <Phone className="w-6 h-6 text-purple-600" />
              <span>Phone Support (Coming Soon)</span>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <MessageCircle className="w-6 h-6 text-purple-600" />
              <span>Live Chat Support (Coming Soon)</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
