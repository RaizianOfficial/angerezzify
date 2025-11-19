import React, { useState } from "react";
import { COURSES } from "../data";
import { CourseCard } from "../components/CourseCard";
import {
  Search as SearchIcon,
  TrendingUp,
  BrainCircuit,
  Mic,
  Sparkles,
} from "lucide-react";

export const Search: React.FC = () => {
  const [query, setQuery] = useState("");

  const filteredCourses = COURSES.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase()) ||
    course.description.toLowerCase().includes(query.toLowerCase()) ||
    course.instructor.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24 dark:text-gray-100">

      {/* ================= HEADER ================= */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_60%)]"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl font-extrabold mb-2">Search Programs</h1>
          <p className="text-purple-100 text-lg max-w-xl">
            Find the right learning program or practice module for your English transformation.
          </p>
        </div>
      </div>

      {/* ================= SEARCH BOX ================= */}
      <div className="-mt-10 max-w-4xl mx-auto px-6 relative z-20">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl p-6">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            
            <input
              type="text"
              placeholder="Search courses, AI practice packs, interview modules…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-transparent border border-gray-300 dark:border-gray-600 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>

          {/* Popular Searches */}
          {!query && (
            <div className="mt-5">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Try popular searches:</p>
              
              <div className="flex flex-wrap gap-3">
                {[
                  "Job English",
                  "Interview Practice",
                  "Fluency Booster",
                  "Confidence Drills",
                  "AI Speaking Practice",
                ].map((tag, i) => (
                  <button
                    key={i}
                    onClick={() => setQuery(tag)}
                    className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 text-sm hover:bg-purple-200 transition"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ================= SEARCH RESULTS ================= */}
      <div className="max-w-5xl mx-auto px-6 mt-10">
        {query && (
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {filteredCourses.length} results for:  
            <span className="font-semibold"> "{query}" </span>
          </p>
        )}

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          query && (
            <div className="bg-white dark:bg-gray-800 p-12 rounded-3xl border border-gray-200 dark:border-gray-700 shadow text-center mt-10">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <SearchIcon className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold mb-1">No results found</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try different keywords or browse from the popular categories below.
              </p>
            </div>
          )
        )}
      </div>

      {/* ================= SUGGESTED COLLECTIONS ================= */}
      {!query && (
        <div className="max-w-5xl mx-auto px-6 mt-12 mb-20">
          <h2 className="text-2xl font-bold mb-6">Suggested Collections</h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {/* Trending */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
              <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-lg mb-1">Trending Programs</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Top English programs chosen by thousands of learners.
              </p>
            </div>

            {/* Fluency Boost */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
              <BrainCircuit className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-lg mb-1">Fluency Booster</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Practice modules to improve tone, delivery, and clarity.
              </p>
            </div>

            {/* Speaking Confidence */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
              <Mic className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-lg mb-1">Confidence Drills</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Build confidence with bite-sized speaking challenges.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
