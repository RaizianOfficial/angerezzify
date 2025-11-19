import React from "react";
import { Link } from "react-router-dom";
import {
  Bot,
  Users,
  Mic,
  BrainCircuit,
  Layers,
  ArrowRight,
} from "lucide-react";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 to-purple-600 text-white py-20">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent_60%)]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left md:flex md:flex-col md:items-start">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight animate-fadeIn">
            Speak English Fearlessly.<br />
            Transform Your Career & Confidence.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-purple-100 max-w-3xl animate-slideUp">
            Angrezzify is India’s youth-focused English communication platform powered by  
            <span className="font-semibold"> AI conversations</span>,  
            <span className="font-semibold"> real-life speaking lessons</span>, and  
            <span className="font-semibold"> confidence-building practice</span>.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-slideUp">
            <Link
              to="/courses"
              className="px-8 py-4 bg-white text-purple-700 font-bold rounded-xl shadow-lg hover:bg-purple-50 transition-all"
            >
              Start 3–6 Month Program
            </Link>

            <Link
              to="/search"
              className="px-8 py-4 bg-purple-800/40 backdrop-blur border border-white/20 rounded-xl text-white hover:bg-purple-800/60 transition-all"
            >
              Try AI Practice Free
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY ANGREZZIFY ================= */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 classDescription="text-3xl font-bold text-center mb-10">
            Why Millions Need Angrezzify
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow hover:shadow-lg transition">
              <Bot className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">AI-Powered Conversations</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Unlimited real-life scenario practice — interviews, meetings, presentations & more.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow hover:shadow-lg transition">
              <BrainCircuit className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Adaptive Learning Engine</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Personalized corrections based on weak areas, speed, tone & grammar.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow hover:shadow-lg transition">
              <Users className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Community Speaking</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Interactive speaking rooms with peers to break hesitation and build confidence.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow hover:shadow-lg transition">
              <Layers className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Bite-Sized Lessons</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Actionable, short lessons built for busy students & professionals.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA STRIP ================= */}
      <section className="bg-purple-700 text-white py-16 relative">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_70%)]"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your English?</h2>
          <p className="text-purple-100 mb-8">
            Begin your journey today and unlock opportunities in jobs, social life, and confidence.
          </p>

          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-700 font-bold rounded-xl shadow-lg hover:bg-purple-50 transition-all"
          >
            Explore Programs <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};
