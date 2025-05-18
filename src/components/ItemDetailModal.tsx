import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { X, Tag, Star, Info } from 'lucide-react';
import { Item } from '../types';

interface ItemDetailModalProps {
  item: Item;
  isOpen: boolean;
  onClose: () => void;
}

const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ item, isOpen, onClose }) => {
  const { isDark } = useTheme();
  const [animationClass, setAnimationClass] = useState('opacity-0 scale-95');
  
  // Handle animation on open/close
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setAnimationClass('opacity-100 scale-100');
      }, 10);
    } else {
      setAnimationClass('opacity-0 scale-95');
    }
  }, [isOpen]);
  
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div 
        className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-2xl max-w-md w-full transform transition-all duration-300 ${animationClass}`}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <button 
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Tag size={18} className="mr-2 text-purple-500" />
              <span className="text-sm opacity-70">Category:</span>
              <span className="ml-2 text-sm">{item.category}</span>
            </div>
            
            {item.rating && (
              <div className="flex items-center">
                <Star size={18} className="mr-2 text-yellow-500" />
                <span className="text-sm opacity-70">Rating:</span>
                <div className="ml-2 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < item.rating ? "currentColor" : "none"} 
                      className={i < item.rating ? "text-yellow-500" : "text-gray-400"} 
                    />
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex">
              <Info size={18} className="mr-2 text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <span className="text-sm opacity-70 block">Description:</span>
                <p className="mt-1">{item.description}</p>
              </div>
            </div>
            
            {item.tags && item.tags.length > 0 && (
              <div className="mt-4">
                <span className="text-sm opacity-70 block mb-2">Tags:</span>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className={`
                        px-2 py-1 text-xs rounded-full
                        ${isDark ? 'bg-gray-700' : 'bg-gray-100'}
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-6 pt-4 border-t dark:border-gray-700">
            <div className="flex justify-end space-x-3">
              <button
                onClick={onClose}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}
                `}
              >
                Close
              </button>
              <button
                className="px-4 py-2 rounded-lg text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              >
                Explore Similar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailModal;