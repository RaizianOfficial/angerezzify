import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, BookOpen, Search, User } from 'lucide-react';

interface BottomNavProps {
  user: any;
  onLogin: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ user, onLogin }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: BookOpen, label: 'Courses', path: '/courses' },
    { icon: Search, label: 'Search', path: '/search' },
  ];

  const handleProfileClick = () => {
    if (user) {
      navigate('/profile');
    } else {
      onLogin();
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 z-40 w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="flex flex-col items-center justify-center w-full h-full space-y-1 focus:outline-none"
          >
            <item.icon 
              className={`w-6 h-6 transition-colors ${isActive(item.path) ? 'text-indigo-600 fill-indigo-100' : 'text-gray-500'}`} 
            />
            <span className={`text-[10px] font-medium ${isActive(item.path) ? 'text-indigo-600' : 'text-gray-500'}`}>
              {item.label}
            </span>
          </Link>
        ))}
        
        {/* Account Tab */}
        <button
          onClick={handleProfileClick}
          className="flex flex-col items-center justify-center w-full h-full space-y-1 focus:outline-none"
        >
          {user ? (
             <img src={user.avatar} alt="Profile" className={`w-6 h-6 rounded-full border ${isActive('/profile') ? 'border-indigo-600' : 'border-gray-200'}`} />
          ) : (
            <User className={`w-6 h-6 transition-colors ${isActive('/profile') ? 'text-indigo-600 fill-indigo-100' : 'text-gray-500'}`} />
          )}
          <span className={`text-[10px] font-medium ${isActive('/profile') ? 'text-indigo-600' : 'text-gray-500'}`}>
            {user ? 'Profile' : 'Login'}
          </span>
        </button>
      </div>
    </div>
  );
};