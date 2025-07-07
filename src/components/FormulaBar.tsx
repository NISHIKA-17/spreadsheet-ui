import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface FormulaBarProps {
  className?: string;
  selectedCell?: string;
}

const FormulaBar = ({ className, selectedCell = 'A1' }: FormulaBarProps) => {
  const [formula, setFormula] = useState('');

  const handleFormulaChange = (value: string) => {
    setFormula(value);
    console.log(`Formula updated: ${value}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log(`Formula applied: ${formula}`);
    }
  };

  return (
    <div className={cn("bg-white border-b border-gray-200 px-4 py-2", className)}>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600 min-w-8">Cell:</span>
          <div className="px-2 py-1 bg-gray-50 border border-gray-200 rounded text-sm font-mono min-w-12 text-center">
            {selectedCell}
          </div>
        </div>
        <div className="flex-1 flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600">Formula:</span>
          <Input
            value={formula}
            onChange={(e) => handleFormulaChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter formula or value..."
            className="flex-1 h-8 text-sm font-mono"
          />
        </div>
      </div>
    </div>
  );
};

export default FormulaBar;
