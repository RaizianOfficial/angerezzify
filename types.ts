export interface SyllabusItem {
  title: string;
  duration: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  price: number; // in Rupees
  image: string;
  rating: number;
  description: string;
  syllabus: SyllabusItem[];
}