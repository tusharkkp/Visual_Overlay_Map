import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { SlidersHorizontal, Users } from 'lucide-react';
import { Category, Friend } from '../types';

interface ControlPanelProps {
  categories: Category[];
  friends: Friend[];
  selectedCategory: Category;
  selectedFriend: Friend;
  onCategoryChange: (category: Category) => void;
  onFriendChange: (friend: Friend) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  categories,
  friends,
  selectedCategory,
  selectedFriend,
  onCategoryChange,
  onFriendChange
}) => {
  const { isDark } = useTheme();
  
  return (
    <div className={`${isDark ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm rounded-xl p-4 shadow-lg mb-6`}>
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <SlidersHorizontal size={18} className="mr-2" />
          <h3 className="font-medium">Categories</h3>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category)}
              className={`
                px-3 py-2 rounded-lg text-sm font-medium transition-all
                ${selectedCategory.id === category.id 
                  ? 'bg-purple-600 text-white shadow-md' 
                  : isDark 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }
              `}
              aria-pressed={selectedCategory.id === category.id}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex items-center mb-3">
          <Users size={18} className="mr-2" />
          <h3 className="font-medium">Friends</h3>
        </div>
        
        <div className="space-y-2">
          {friends.map(friend => (
            <button
              key={friend.id}
              onClick={() => onFriendChange(friend)}
              className={`
                w-full px-3 py-2 rounded-lg flex items-center text-left transition-all
                ${selectedFriend.id === friend.id 
                  ? 'bg-teal-600 text-white shadow-md' 
                  : isDark 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }
              `}
              aria-pressed={selectedFriend.id === friend.id}
            >
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center mr-2 text-white font-medium
                ${selectedFriend.id === friend.id 
                  ? 'bg-teal-500' 
                  : 'bg-gray-500'
                }
              `}>
                {friend.name.charAt(0)}
              </div>
              <span>{friend.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;