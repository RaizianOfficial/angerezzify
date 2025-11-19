import React from "react";
import { Link } from "react-router-dom";
import {
  X,
  Home,
  BookOpen,
  User,
  Search,
  Settings,
  HelpCircle,
  LogIn,
  LogOut,
  Bot,
  Sparkles,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
  onLogin: () => void;
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  user,
  onLogin,
  onLogout,
}) => {
  return (
    <>
      {/* Background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 shadow-2xl border-r border-gray-200 dark:border-gray-700 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h1 className="text-2xl font-extrabold text-purple-700 dark:text-purple-400">
              Angrezzify
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Speak English Fearlessly
            </p>
          </div>

          <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={onClose}
          >
            <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* User Section */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          {user ? (
            <div className="flex items-center gap-4">
              <img
                src={user.avatar}
                alt="avatar"
                className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 shadow"
              />
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user.email}
                </p>
              </div>
            </div>
          ) : (
            <button
              onClick={onLogin}
              className="w-full py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-700 transition"
            >
              <LogIn className="inline-block w-5 h-5 mr-2" />
              Login to Continue
            </button>
          )}
        </div>

        {/* MENU */}
        <div className="p-4 space-y-1 text-gray-700 dark:text-gray-200">

          <Link
            to="/"
            onClick={onClose}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Home className="w-5 h-5" />
            Home
          </Link>

          <Link
            to="/courses"
            onClick={onClose}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <BookOpen className="w-5 h-5" />
            Programs (3–6 Months)
          </Link>

          <Link
            to="/search"
            onClick={onClose}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Bot className="w-5 h-5" />
            AI Speaking Practice
          </Link>

          <Link
            to="/profile"
            onClick={onClose}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <User className="w-5 h-5" />
            Your Journey
          </Link>

          <Link
            to="/settings"
            onClick={onClose}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Settings className="w-5 h-5" />
            Settings
          </Link>

          <Link
            to="/help"
            onClick={onClose}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <HelpCircle className="w-5 h-5" />
            Help & Support
          </Link>
        </div>

        {/* FOOTER / LOGOUT */}
        <div className="absolute bottom-0 left-0 w-full p-6 border-t border-gray-200 dark:border-gray-700">
          {user ? (
            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="w-full py-3 flex items-center justify-center gap-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          ) : (
            <p className="text-center text-gray-500 text-sm">
              Not logged in
            </p>
          )}
        </div>
      </div>
    </>
  );
};
