import React, { useState } from 'react';
import Spreadsheet from '@/components/Spreadsheet';
import Toolbar from '@/components/Toolbar';
import TabNavigation from '@/components/TabNavigation';
import FormulaBar from '@/components/FormulaBar';

const Index = () => {
  const [selectedCell, setSelectedCell] = useState('A1');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Spreadsheet App</h1>
            <p className="text-sm text-gray-500 mt-1">React Intern Assignment - Pixel Perfect Implementation</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
              Live Preview
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <Toolbar />

      {/* Formula Bar */}
      <FormulaBar selectedCell={selectedCell} />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <Spreadsheet className="h-[600px]" />
        </div>
      </div>

      {/* Tab Navigation */}
      <TabNavigation />
    </div>
  );
};

export default Index;