import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  name: string;
}

interface TabNavigationProps {
  className?: string;
}

const TabNavigation = ({ className }: TabNavigationProps) => {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: '1', name: 'Sheet1' },
    { id: '2', name: 'Sheet2' },
    { id: '3', name: 'Sheet3' },
  ]);
  const [activeTab, setActiveTab] = useState('1');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    console.log(`Tab switched: ${tabs.find(t => t.id === tabId)?.name}`);
  };

  const handleAddTab = () => {
    const newTab = {
      id: String(tabs.length + 1),
      name: `Sheet${tabs.length + 1}`
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
    console.log(`New tab added: ${newTab.name}`);
  };

  const handleCloseTab = (tabId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (tabs.length > 1) {
      const newTabs = tabs.filter(tab => tab.id !== tabId);
      setTabs(newTabs);
      if (activeTab === tabId) {
        setActiveTab(newTabs[0].id);
      }
      console.log(`Tab closed: ${tabs.find(t => t.id === tabId)?.name}`);
    }
  };

  return (
    <div className={cn("bg-gray-50 border-t border-gray-200 px-2 py-1", className)}>
      <div className="flex items-center gap-1">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cn(
              "flex items-center gap-1 px-3 py-1 rounded-t-md cursor-pointer group transition-colors",
              activeTab === tab.id
                ? "bg-white border-t border-l border-r border-gray-200 text-gray-900"
                : "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900"
            )}
            onClick={() => handleTabClick(tab.id)}
          >
            <span className="text-sm font-medium">{tab.name}</span>
            {tabs.length > 1 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 opacity-0 group-hover:opacity-100 hover:bg-gray-300"
                onClick={(e) => handleCloseTab(tab.id, e)}
              >
                <X className="h-3 w-3" />
              </Button>
            )}
          </div>
        ))}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleAddTab}
          className="h-7 w-7 p-0 ml-2 hover:bg-gray-200"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TabNavigation;
