import { Course } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Complete ReactJS Bootcamp',
    instructor: 'Sarah Sharma',
    price: 4999,
    rating: 4.8,
    image: 'https://picsum.photos/seed/react/400/250',
    description: 'Master React 18 from scratch. Learn Hooks, Redux, Context API, and build real-world projects.',
    syllabus: [
      { title: 'Introduction to React & JSX', duration: '1h 20m' },
      { title: 'State and Props', duration: '2h 10m' },
      { title: 'React Hooks Deep Dive', duration: '3h 45m' },
      { title: 'State Management with Redux', duration: '4h 00m' },
    ],
  },
  {
    id: '2',
    title: 'Next.js 15: Zero to Hero',
    instructor: 'Rahul Verma',
    price: 5999,
    rating: 4.9,
    image: 'https://picsum.photos/seed/nextjs/400/250',
    description: 'Build server-side rendered applications with Next.js 15. Learn App Router, Server Actions, and more.',
    syllabus: [
      { title: 'Introduction to Next.js 15', duration: '1h 00m' },
      { title: 'App Router vs Pages Router', duration: '1h 30m' },
      { title: 'Server Components', duration: '2h 15m' },
      { title: 'Data Fetching & Caching', duration: '3h 00m' },
    ],
  },
  {
    id: '3',
    title: 'TypeScript for Professionals',
    instructor: 'Amit Patel',
    price: 3499,
    rating: 4.7,
    image: 'https://picsum.photos/seed/ts/400/250',
    description: 'Take your JavaScript skills to the next level with static typing. Interfaces, Generics, and Utility types.',
    syllabus: [
      { title: 'Basic Types & Interfaces', duration: '1h 45m' },
      { title: 'Advanced Generics', duration: '2h 30m' },
      { title: 'TypeScript with React', duration: '3h 15m' },
      { title: 'Backend Development with Node.js & TS', duration: '4h 00m' },
    ],
  },
  {
    id: '4',
    title: 'UI/UX Design with Tailwind',
    instructor: 'Priya Singh',
    price: 2999,
    rating: 4.9,
    image: 'https://picsum.photos/seed/tailwind/400/250',
    description: 'Learn to design beautiful, responsive websites using utility-first CSS framework Tailwind.',
    syllabus: [
      { title: 'Utility First Fundamentals', duration: '1h 15m' },
      { title: 'Responsive Design Patterns', duration: '2h 00m' },
      { title: 'Customizing the Config', duration: '1h 45m' },
      { title: 'Building a Component Library', duration: '3h 30m' },
    ],
  },
];