import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Mic, Brain, ArrowRight, User } from "lucide-react";

interface ProfileProps {
  user: any;
  onLogin: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ user, onLogin }) => {
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-center px-6">
        <User className="w-16 h-16 text-purple-600 mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          You're not logged in
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-sm">
          Sign in to track your learning journey, progress and AI practice growth.
        </p>

        <button
          onClick={onLogin}
          className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-700 transition"
        >
          Login to Continue
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24 dark:text-gray-100">

      {/* ================= HEADER ================= */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16 relative">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent_60%)]"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex items-center gap-6">
          <img
            src={user.avatar}
            alt="avatar"
            className="w-20 h-20 rounded-full shadow-lg border-4 border-white/30"
          />

          <div>
            <h1 className="text-3xl font-extrabold">{user.name}</h1>
            <p className="text-purple-100">{user.email}</p>
          </div>
        </div>
      </div>

      {/* ================= DASHBOARD ================= */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">

        {/* STATS SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">

          {/* Fluency Score */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow border border-gray-200 dark:border-gray-700">
            <Brain className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold">Fluency Score</h3>
            <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-gray-100">
              68/100
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Improving steadily
            </p>
          </div>

          {/* Speaking Confidence */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow border border-gray-200 dark:border-gray-700">
            <Mic className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold">Confidence Index</h3>
            <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-gray-100">
              72%
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Based on AI speaking analysis
            </p>
          </div>

          {/* Lessons Completed */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow border border-gray-200 dark:border-gray-700">
            <Sparkles className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold">Lessons Completed</h3>
            <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-gray-100">
              12
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Keep learning daily
            </p>
          </div>

        </div>

        {/* ================= RECOMMENDED LESSONS ================= */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-7 mb-10">
          <h2 className="text-2xl font-bold mb-4">Recommended For You</h2>

          <div className="space-y-4">
            {[
              "Interview English Practice",
              "Office Communication Skills",
              "Hesitation Removal Speaking Drills",
            ].map((title, i) => (
              <div
                key={i}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl flex items-center justify-between hover:shadow transition"
              >
                <span>{title}</span>
                <Link
                  to="/search"
                  className="text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-1"
                >
                  Start <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center">
          <Link
            to="/search"
            className="px-8 py-4 bg-purple-600 text-white font-bold rounded-xl shadow hover:bg-purple-700 transition inline-flex items-center gap-2"
          >
            Start AI Speaking Practice  
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
