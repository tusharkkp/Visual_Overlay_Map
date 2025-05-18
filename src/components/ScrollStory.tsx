import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const ScrollStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const { isDark } = useTheme();
  
  const stories = [
    {
      title: "Your Recommendations",
      description: "These are items you enjoy and recommend, curated from your personal taste and preferences."
    },
    {
      title: "Friend's Recommendations",
      description: "Your friend has their own set of favorites and recommendations based on their unique preferences."
    },
    {
      title: "Discover Overlaps",
      description: "See where your tastes intersect. These shared recommendations may reveal common interests or surprising connections."
    },
    {
      title: "Explore & Share",
      description: "Dive deeper into your shared interests or discover something new from each other's recommendations."
    }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Calculate which section should be active based on scroll position
      const sectionIndex = Math.min(
        Math.max(0, Math.floor((scrollY - viewportHeight * 0.5) / (viewportHeight * 0.2))),
        stories.length - 1
      );
      
      setActiveSection(sectionIndex);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stories.length]);
  
  return (
    <div ref={containerRef} className="py-12 space-y-24 sm:space-y-32">
      {stories.map((story, index) => (
        <div 
          key={index} 
          className={`
            max-w-2xl mx-auto transition-all duration-700 transform
            ${index === activeSection 
              ? 'opacity-100 translate-y-0' 
              : index < activeSection 
                ? 'opacity-30 -translate-y-12' 
                : 'opacity-30 translate-y-12'
            }
          `}
        >
          <div className="flex items-start">
            <div className={`
              flex items-center justify-center w-10 h-10 rounded-full mr-4 transition-colors
              ${index === activeSection 
                ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                : isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-500'
              }
            `}>
              {index + 1}
            </div>
            
            <div>
              <h2 className={`
                text-2xl sm:text-3xl font-bold mb-3 transition-colors
                ${index === activeSection
                  ? 'bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500'
                  : ''
                }
              `}>
                {story.title}
              </h2>
              
              <p className="text-base sm:text-lg opacity-90">
                {story.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollStory;