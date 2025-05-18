import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { LineChart, BarChart2, Heart } from 'lucide-react';
import { Category, Friend, Item } from '../types';

interface InsightsPanelProps {
  userItems: Item[];
  friendItems: Item[];
  overlappingItems: Item[];
  selectedCategory: Category;
  selectedFriend: Friend;
}

const InsightsPanel: React.FC<InsightsPanelProps> = ({
  userItems,
  friendItems,
  overlappingItems,
  selectedCategory,
  selectedFriend
}) => {
  const { isDark } = useTheme();
  const [compatibilityScore, setCompatibilityScore] = useState(0);
  const [insight, setInsight] = useState('');
  
  // Calculate compatibility score and insights when data changes
  useEffect(() => {
    if (userItems.length === 0 || friendItems.length === 0) {
      setCompatibilityScore(0);
      setInsight('No data available for comparison.');
      return;
    }
    
    // Calculate compatibility as a percentage
    const totalItems = Math.max(userItems.length, friendItems.length);
    const score = Math.round((overlappingItems.length / totalItems) * 100);
    
    // Animation for score
    let currentScore = 0;
    const timer = setInterval(() => {
      currentScore += 2;
      if (currentScore >= score) {
        currentScore = score;
        clearInterval(timer);
      }
      setCompatibilityScore(currentScore);
    }, 20);
    
    // Generate insight based on compatibility
    let insightText = '';
    if (score >= 80) {
      insightText = `You and ${selectedFriend.name} have remarkably similar ${selectedCategory.name.toLowerCase()} tastes! You're practically twins.`;
    } else if (score >= 60) {
      insightText = `Great match! You and ${selectedFriend.name} share many ${selectedCategory.name.toLowerCase()} preferences.`;
    } else if (score >= 40) {
      insightText = `You and ${selectedFriend.name} have some common ${selectedCategory.name.toLowerCase()} interests to explore together.`;
    } else if (score >= 20) {
      insightText = `You and ${selectedFriend.name} have different ${selectedCategory.name.toLowerCase()} tastes, but share a few gems.`;
    } else {
      insightText = `You and ${selectedFriend.name} have very different ${selectedCategory.name.toLowerCase()} preferences. Time to expand your horizons!`;
    }
    
    setInsight(insightText);
    
    return () => clearInterval(timer);
  }, [userItems, friendItems, overlappingItems, selectedCategory, selectedFriend]);
  
  return (
    <div className={`${isDark ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm rounded-xl p-4 shadow-lg`}>
      <div className="flex items-center mb-3">
        <LineChart size={18} className="mr-2" />
        <h3 className="font-medium">Insights</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <span className="opacity-70">Overlaps:</span>
          </div>
          <div className="font-semibold">
            {overlappingItems.length} / {Math.max(userItems.length, friendItems.length)}
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <div className="text-sm">
              <span className="opacity-70">Compatibility:</span>
            </div>
            <div className="font-semibold">{compatibilityScore}%</div>
          </div>
          
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-teal-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${compatibilityScore}%` }}
            ></div>
          </div>
        </div>
        
        <div className={`${isDark ? 'bg-gray-700/60' : 'bg-gray-100/70'} p-3 rounded-lg`}>
          <div className="flex items-center mb-1 text-sm font-medium">
            <Heart size={14} className="mr-1 text-pink-500" />
            <span>AI Insight</span>
          </div>
          <p className="text-sm">{insight}</p>
        </div>
        
        <div className="mt-4">
          <h4 className="text-sm flex items-center mb-2">
            <BarChart2 size={14} className="mr-1" />
            <span>Top Shared {selectedCategory.name}</span>
          </h4>
          
          <div className="space-y-2 max-h-32 overflow-y-auto pr-1">
            {overlappingItems.length > 0 ? (
              overlappingItems.slice(0, 3).map(item => (
                <div 
                  key={item.id} 
                  className={`${isDark ? 'bg-gray-700/60' : 'bg-gray-100/70'} p-2 rounded text-sm`}
                >
                  {item.title}
                </div>
              ))
            ) : (
              <div className={`${isDark ? 'bg-gray-700/60' : 'bg-gray-100/70'} p-2 rounded text-sm`}>
                No shared items in this category
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsPanel;