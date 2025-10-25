// src/components/AboutMe/TabNavigation.tsx

import React from 'react';
import type { TabData, TabId } from '../../types/datatypes'; // Adjust path

interface TabNavigationProps {
  tabs: TabData[];
  activeTabId: TabId;
  onTabChange: (id: TabId) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ tabs, activeTabId, onTabChange }) => {

  const getTabClasses = (id: TabId) => {
    const base = 'px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer';
    
    // Active state: White text with a solid red bottom border
    if (id === activeTabId) {
      return `${base} text-white border-b-2 border-red-500`; 
    } 
    
    // Inactive state: Gray text with hover effects
    return `${base} text-gray-400 hover:text-white hover:border-b-2 hover:border-gray-700`;
  };

  return (
    // The main container includes the gray line at the bottom
    <div className="flex space-x-4 border-b border-gray-700"> 
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={getTabClasses(tab.id)}
          // The click handler updates the state in the parent component
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};