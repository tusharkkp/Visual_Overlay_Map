import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import LandingHero from './components/LandingHero';
import OverlapMap from './components/OverlapMap';
import ControlPanel from './components/ControlPanel';
import InsightsPanel from './components/InsightsPanel';
import ScrollStory from './components/ScrollStory';
import ItemDetailModal from './components/ItemDetailModal';
import { Category, Friend, Item } from './types';
import { categories, friends, getItems } from './data/mockData';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);
  const [selectedFriend, setSelectedFriend] = useState<Friend>(friends[0]);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isThemeDark, setIsThemeDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Load saved preferences
  useEffect(() => {
    const savedCategory = localStorage.getItem('selectedCategory');
    const savedFriend = localStorage.getItem('selectedFriend');

    if (savedCategory) {
      const found = categories.find(c => c.id === savedCategory);
      if (found) setSelectedCategory(found);
    }

    if (savedFriend) {
      const found = friends.find(f => f.id === savedFriend);
      if (found) setSelectedFriend(found);
    }
  }, []);

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem('selectedCategory', selectedCategory.id);
    localStorage.setItem('selectedFriend', selectedFriend.id);
    localStorage.setItem('theme', isThemeDark ? 'dark' : 'light');
  }, [selectedCategory, selectedFriend, isThemeDark]);

  const toggleTheme = () => {
    setIsThemeDark(!isThemeDark);
  };

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
    setIsDetailModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsDetailModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300); // Clear after animation
  };

  // Get items for the selected category and friend
  const userItems = getItems(selectedCategory.id, 'user');
  const friendItems = getItems(selectedCategory.id, selectedFriend.id);
  
  // Calculate overlapping items
  const overlappingItems = userItems.filter(userItem => 
    friendItems.some(friendItem => friendItem.title === userItem.title)
  );

  return (
    <ThemeProvider value={{ isDark: isThemeDark, toggleTheme }}>
      <div className={`min-h-screen transition-colors duration-500 ${isThemeDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
        <div className="fixed top-4 right-4 z-50">
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-full transition-all ${isThemeDark ? 'bg-gray-800 text-yellow-300' : 'bg-white text-gray-800'} shadow-lg hover:scale-110`}
            aria-label={isThemeDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isThemeDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <LandingHero />
        
        <div className="container mx-auto px-4 pb-20">
          <ScrollStory />
          
          <div className="relative mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-3">
              <ControlPanel 
                categories={categories}
                friends={friends}
                selectedCategory={selectedCategory}
                selectedFriend={selectedFriend}
                onCategoryChange={setSelectedCategory}
                onFriendChange={setSelectedFriend}
              />
              
              <InsightsPanel 
                userItems={userItems}
                friendItems={friendItems}
                overlappingItems={overlappingItems}
                selectedCategory={selectedCategory}
                selectedFriend={selectedFriend}
              />
            </div>
            
            <div className="lg:col-span-9 relative">
              <OverlapMap 
                userItems={userItems}
                friendItems={friendItems}
                overlappingItems={overlappingItems}
                onItemClick={handleItemClick}
              />
            </div>
          </div>
        </div>
        
        {selectedItem && (
          <ItemDetailModal 
            item={selectedItem} 
            isOpen={isDetailModalOpen} 
            onClose={handleCloseModal}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;