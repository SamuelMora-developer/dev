
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Book, BookOpen, ListOrdered } from 'lucide-react';

const Courses = () => {
  const modules = [
    {
      id: 1,
      title: 'Module 1: Entrepreneurship Fundamentals',
      description: 'Learn the core principles of entrepreneurship and business mindset.',
      lessons: 3,
      href: '/modules/1',
    },
    {
      id: 2,
      title: 'Module 2: Digital Marketing Essentials',
      description: 'Master the basics of marketing your business in the digital landscape.',
      lessons: 4,
      href: '/modules/2',
    },
    {
      id: 3,
      title: 'Module 3: Building & Scaling Your Business',
      description: 'Comprehensive strategies to grow and scale your business effectively.',
      lessons: 11,
      href: '/modules/3',
    },
    {
      id: 4,
      title: 'Module 4: Advanced Sales Techniques',
      description: 'Learn high-converting sales strategies for both online and offline businesses.',
      lessons: 9,
      href: '/modules/4',
    },
    {
      id: 5,
      title: 'Module 5: Financial Mastery',
      description: 'Understand business finance, investment strategies, and wealth building.',
      lessons: 5,
      href: '/modules/5',
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-hustler-black">Course Curriculum</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-hustler-darkgray">
            Our comprehensive curriculum is designed to take you from beginner to pro entrepreneur.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {modules.map((module) => (
              <AccordionItem key={module.id} value={`module-${module.id}`} className="border border-gray-200 mb-4 rounded-lg overflow-hidden">
                <AccordionTrigger className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4 text-white hover:no-underline">
                  <div className="flex items-center">
                    <BookOpen className="mr-3 text-hustler-gold" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold">{module.title}</h3>
                      <p className="text-sm text-gray-300 mt-1">{module.lessons} Lessons</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-4 pb-6 bg-white">
                  <p className="text-hustler-darkgray mb-4">{module.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-hustler-black flex items-center mb-2">
                      <ListOrdered className="mr-2 text-hustler-gold" /> 
                      Lesson Overview
                    </h4>
                    <ul className="pl-9 space-y-1 list-disc text-hustler-darkgray">
                      {Array.from({ length: module.lessons }).map((_, i) => (
                        <li key={i}>Lesson {i + 1}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="bg-hustler-black hover:bg-gray-800 text-white mt-2">
                    <Link to={module.href}>Start Module</Link>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-hustler-gold text-hustler-black hover:bg-hustler-gold/10">
            <Link to="/courses">View Full Curriculum</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
