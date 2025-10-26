// src/components/AboutMe/AboutMe.tsx

import React, { useState } from 'react';
import { TabNavigation } from './Tabswitch';
import { TABS_DATA } from '../../types/datatypes.tsx'; // Import data and types
import type { TabId } from '../../types/datatypes.tsx';
export const AboutMe: React.FC = () => {
  // State initialization: 'about' is active by default
  const [activeTabId, setActiveTabId] = useState<TabId>('about');

  // Logic to find the current active tab object for content rendering
  const activeTab = TABS_DATA.find(tab => tab.id === activeTabId);

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-2xl">
      
      {/* Header and Icon Area */}
      

      {/* 1. TAB NAVIGATION (Clicking here updates activeTabId) */}
      <TabNavigation 
        tabs={TABS_DATA} 
        activeTabId={activeTabId} 
        onTabChange={setActiveTabId} // State update function passed to child
      />
      
      {/* 2. TAB CONTENT AREA */}
      <div className="mt-4 pt-4">
        {/* Conditional rendering: displays the content property of the active tab object */}
        {activeTab ? activeTab.content : null}
      </div>

    </div>
  );
};