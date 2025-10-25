// src/types/index.ts
import React from 'react';

export type TabId = 'about' | 'experiences' | 'recommended';

export interface TabData {
  id: TabId;
  label: string;
  // This will hold the JSX/component for the content area
  content: React.ReactNode; 
}

export const TABS_DATA: TabData[] = [
  {
    id: 'about',
    label: 'About Me',
    content: (
      <div className="text-gray-300">
        <p>Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.</p>
        <p className="mt-2">I was born and raised in Albany, NY have been living in Santa Carla for the past 10 years...</p>
      </div>
    )
  },

  {
    id: 'experiences',
    label: 'Experiences',
    content: (
      <ul className="list-disc list-inside text-gray-300">
        <li>Senior Sales Executive (Salesforce)</li>
        <li>Regional Manager (Acme Corp)</li>
        <li>Sales Associate (Retail Inc.)</li>
      </ul>
    ),
  },
  {
    id: 'recommended',
    label: 'Recommended',
    content: (
      <p className="text-gray-300">
        Highly recommend checking out the latest features in Salesforce Cloud CRM!
      </p>
    ),
  },
];