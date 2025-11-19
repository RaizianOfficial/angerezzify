import React from "react";
import { Link } from "react-router-dom";
import { COURSES } from "../data";
import { CourseCard } from "../components/CourseCard";
import { Search as SearchIcon, Sparkles } from "lucide-react";

export const Courses: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24 dark:text-gray-100">

      {/* ================= HEADER ================= */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16 relative">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_55%)]"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl font-extrabold mb-2">Angrezzify Programs</h1>
          <p className="text-purple-100 text-lg max-w-2xl">
            Transform your speaking confidence with 3–6 month immersive programs,
            AI-powered conversation practice, and real-life speaking lessons.
          </p>
        </div>
      </div>

      {/* ================= SEARCH STRIP ================= */}
      <div className="-mt-10 max-w-5xl mx-auto px-6 relative z-20">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl p-5 flex items-center gap-3">
          <SearchIcon className="w-6 h-6 text-gray-500" />
          <input
            type="text"
            placeholder="Search for English programs…"
            className="flex-1 bg-transparent outline-none text-gray-800 dark:text-gray-100 placeholder-gray-400"
          />
        </div>
      </div>

      {/* ================= CATEGORY INTRO ================= */}
      <section className="py-12 max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-1">Choose Your Learning Path</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Every program is built for real-life speaking, job readiness, and
          confidence development.
        </p>

        {/* FILTERS (Static - Optional for future expansion) */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button className="px-5 py-2 bg-purple-600 text-white rounded-full text-sm font-semibold shadow hover:bg-purple-700 transition">
            All Programs
          </button>
          <button className="px-5 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            Job English
          </button>
          <button className="px-5 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            Fluency Boost
          </button>
          <button className="px-5 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            Interview Prep
          </button>
        </div>
      </section>

      {/* ================= COURSE GRID ================= */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-16">
        {COURSES.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* ================= CTA STRIP ================= */}
      <section className="bg-purple-700 text-white py-16 relative">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_70%)]"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <Sparkles className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-3">Not Sure Where to Start?</h2>
          <p className="text-purple-100 mb-6">
            Try AI Speaking Practice for free and discover your fluency level.
          </p>

          <Link
            to="/search"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-700 font-bold rounded-xl shadow-lg hover:bg-purple-100 transition"
          >
            Try Free Practice
          </Link>
        </div>
      </section>
    </div>
  );
};
