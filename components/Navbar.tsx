import React from "react";
import { Menu, LogIn, LogOut, Bot } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  onToggleSidebar: () => void;
  user: any;
  onLogin: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onToggleSidebar,
  user,
  onLogin,
  onLogout,
}) => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* LEFT: MENU + BRAND */}
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={onToggleSidebar}
          >
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>

          <Link to="/" className="flex flex-col leading-tight select-none">
            <span className="text-2xl font-extrabold text-purple-700 dark:text-purple-400">
              Angrezzify
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
              Speak English Fearlessly
            </span>
          </Link>
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="flex items-center gap-4">

          {/* AI Practice Button */}
          <Link
            to="/search"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-xl font-semibold shadow hover:bg-purple-700 transition"
          >
            <Bot className="w-5 h-5" />
            AI Practice
          </Link>

          {/* User Auth */}
          {user ? (
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-xl font-semibold shadow hover:bg-red-600 transition"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          ) : (
            <button
              onClick={onLogin}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-xl font-semibold shadow hover:bg-purple-700 transition"
            >
              <LogIn className="w-5 h-5" />
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
