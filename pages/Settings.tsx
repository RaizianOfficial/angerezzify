import React from "react";
import {
  Bell,
  Moon,
  Lock,
  Volume2,
  Smartphone,
  Globe,
  UserCog,
} from "lucide-react";

interface SettingsProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const Settings: React.FC<SettingsProps> = ({ darkMode, setDarkMode }) => {
  const [notifications, setNotifications] = React.useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24 dark:text-gray-100">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16 relative">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),transparent_60%)]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl font-extrabold mb-2">Settings</h1>
          <p className="text-purple-100">Customize your experience</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 -mt-12 relative">

        {/* ================= APP PREFERENCES ================= */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
          
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center gap-2">
              <UserCog className="w-5 h-5 text-purple-600" />
              <h2 className="font-semibold">App Preferences</h2>
            </div>
          </div>

          <div className="divide-y dark:divide-gray-700 divide-gray-100">

            {/* Notifications */}
            <div className="flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                <div>
                  <p className="text-sm font-medium">Push Notifications</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Receive updates about your courses
                  </p>
                </div>
              </div>

              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${
                  notifications ? "bg-purple-600" : "bg-gray-300 dark:bg-gray-600"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${
                    notifications ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Dark Mode */}
            <div className="flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              <div className="flex items-center gap-3">
                <Moon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                <div>
                  <p className="text-sm font-medium">Dark Mode</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Switch to dark theme</p>
                </div>
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${
                  darkMode ? "bg-purple-600" : "bg-gray-300 dark:bg-gray-600"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${
                    darkMode ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Video Playback */}
            <div className="flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-700 transition cursor-pointer">
              <div className="flex items-center gap-3">
                <Volume2 className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                <p className="text-sm font-medium">Video Playback Settings</p>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">Auto</span>
            </div>

            {/* Download Options */}
            <div className="flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-700 transition cursor-pointer">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                <p className="text-sm font-medium">Download Options</p>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">Wi-Fi Only</span>
            </div>

          </div>
        </div>

        {/* ================= ACCOUNT SETTINGS ================= */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">

          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-purple-600" />
              <h2 className="font-semibold">Account</h2>
            </div>
          </div>

          <div className="divide-y dark:divide-gray-700 divide-gray-100">

            {/* Privacy */}
            <div className="flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-700 transition cursor-pointer">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                <p className="text-sm font-medium">Privacy Settings</p>
              </div>
            </div>

            {/* Language */}
            <div className="flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-700 transition cursor-pointer">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                <p className="text-sm font-medium">Language</p>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">English (US)</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
