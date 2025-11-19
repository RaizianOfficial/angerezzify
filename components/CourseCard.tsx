import React from 'react';
import { Link } from 'react-router-dom';
import { Star, User, IndianRupee } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`} className="group block h-full">
      <div className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-bold text-gray-700">{course.rating}</span>
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
            {course.title}
          </h3>
          
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
            <User className="w-4 h-4" />
            <span>{course.instructor}</span>
          </div>

          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center text-indigo-600 font-bold text-lg">
              <IndianRupee className="w-4 h-4" />
              <span>{course.price.toLocaleString('en-IN')}</span>
            </div>
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};