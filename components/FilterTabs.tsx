'use client';

import { FilterTabsProps, TodoFilter } from '../lib/types';

export default function FilterTabs({ currentFilter, onFilterChange, counts }: FilterTabsProps) {
  const filters: Array<{ key: TodoFilter; label: string; count: number }> = [
    { key: 'all', label: 'All', count: counts.all },
    { key: 'active', label: 'Active', count: counts.active },
    { key: 'completed', label: 'Completed', count: counts.completed },
  ];

  const handleFilterClick = (filter: TodoFilter) => {
    onFilterChange(filter);
  };

  const handleKeyDown = (e: React.KeyboardEvent, filter: TodoFilter) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFilterClick(filter);
    }
  };

  return (
    <div className="filter-tabs-container">
      {/* Filter tabs */}
      <div className="filter-tabs">
        {filters.map((filter) => (
          <button
            key={filter.key}
            className={`filter-tab ${currentFilter === filter.key ? 'active' : ''}`}
            onClick={() => handleFilterClick(filter.key)}
            onKeyDown={(e) => handleKeyDown(e, filter.key)}
            aria-label={`Show ${filter.label.toLowerCase()} todos`}
            aria-pressed={currentFilter === filter.key}
            role="tab"
          >
            <span className="filter-tab-label">
              {filter.label}
            </span>
            <span className="filter-tab-count">
              {filter.count}
            </span>
          </button>
        ))}
      </div>

      {/* Filter description */}
      <div className="filter-description mt-2">
        <p className="text-xs text-gray-500 text-center">
          {currentFilter === 'all' && 'Showing all todos'}
          {currentFilter === 'active' && 'Showing active todos'}
          {currentFilter === 'completed' && 'Showing completed todos'}
        </p>
      </div>

      {/* Mobile swipe indicator */}
      <div className="mt-2 flex justify-center sm:hidden">
        <div className="flex space-x-1">
          {filters.map((filter) => (
            <div
              key={filter.key}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentFilter === filter.key ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Keyboard shortcuts hint */}
      <div className="mt-3 text-xs text-gray-400 text-center space-y-1">
        <p className="hidden sm:block">
          💡 Use keyboard: <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Tab</kbd> to navigate, <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Enter</kbd> to select
        </p>
        <div className="flex justify-center gap-4 text-xs">
          <span>All: {counts.all}</span>
          <span>Active: {counts.active}</span>
          <span>Done: {counts.completed}</span>
        </div>
      </div>
    </div>
  );
}