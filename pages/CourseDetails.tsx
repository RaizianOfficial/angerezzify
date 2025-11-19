import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { COURSES } from "../data";
import { Course } from "../types";
import {
  Play,
  Clock,
  Award,
  CheckCircle2,
  AlertCircle,
  Users,
  Star,
  Sparkles,
  Mic,
  Bot,
  BrainCircuit,
} from "lucide-react";

export const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const foundCourse = COURSES.find((c) => c.id === id);
    setCourse(foundCourse || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-600 border-t-transparent"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
        <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Course Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The course you're looking for was removed or no longer exists.
        </p>
        <Link to="/courses" className="text-purple-600 font-semibold">
          ← Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-purple-700 to-purple-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent_60%)]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          <div>
            {/* Badge */}
            <div className="flex items-center gap-3 mb-5">
              <span className="px-4 py-1 rounded-full text-sm bg-white/20 backdrop-blur border border-white/20">
                {course.instructor}
              </span>

              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur border border-white/20 text-sm">
                <Award className="w-4 h-4" /> Bestseller Program
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
              {course.title} — Become Job & Life Ready in English
            </h1>

            <p className="text-purple-100 text-lg leading-relaxed mb-10">
              Master English communication through AI-powered conversations,
              real-life speaking scenarios, adaptive learning, and a
              confidence-boosting curriculum designed for India’s youth.
            </p>

            <div className="flex gap-6 text-purple-200 mb-8">
              <span className="flex items-center gap-2"><Users className="w-5 h-5" /> 12,000+ Learners</span>
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-300" /> {course.rating} Rating</span>
            </div>

            <button className="px-10 py-4 bg-white text-purple-700 font-bold rounded-xl shadow-lg hover:bg-purple-50 transition-all text-lg">
              Enroll Now — ₹{course.price}
            </button>
          </div>

          {/* Video Preview */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all"></div>

            <div className="relative aspect-video bg-black/30 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={course.image}
                alt="Preview"
                className="w-full h-full object-cover opacity-40"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-white" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur px-3 py-1 rounded-md text-sm">
                Watch intro lesson
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">

          {[
            { label: "AI Conversations", value: "Unlimited Practice", icon: Bot },
            { label: "Personalized Feedback", value: "Adaptive Learning", icon: BrainCircuit },
            { label: "Speaking Confidence", value: "Community Practice", icon: Mic },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-7 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition"
            >
              <item.icon className="w-8 h-8 text-purple-600 mb-4" />
              <p className="text-sm text-gray-500 dark:text-gray-300">{item.label}</p>
              <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{item.value}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= SYLLABUS ================= */}
      <section className="bg-gray-50 dark:bg-gray-900 py-14 flex-grow">
        <div className="max-w-4xl mx-auto px-6">
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            What You’ll Learn
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md">
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              
              {[
                "Foundations of English Confidence",
                "Real-Life Speaking Practice (Interviews, Office, Daily Life)",
                "Professional Communication & Job English",
                "Fluency, Accent & Speech Delivery",
                "Advanced Presentations & Public Speaking",
                "Final Fluency Assessment + Transformation Report",
              ].map((title, index) => (
                <div
                  key={index}
                  className="p-6 flex items-start gap-5 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <div className="pt-1">
                    <CheckCircle2 className="w-7 h-7 text-green-500" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Module {index + 1}: {title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 text-sm">
                      Includes structured lessons, speaking practice, and adaptive feedback.
                    </p>
                  </div>

                  <span className="px-4 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 border dark:border-gray-600 flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {course.syllabus[index]?.duration || "2h"}
                  </span>
                </div>
              ))}

            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-10 py-4 bg-purple-600 text-white font-bold rounded-xl shadow-md hover:bg-purple-700 transition-all text-lg">
              Start Learning Now
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};