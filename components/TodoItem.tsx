'use client';

import { useState } from 'react';
import { TodoItemProps } from '../lib/types';

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleToggle = () => {
    if (!isDeleting) {
      onToggle(todo.id);
    }
  };

  const handleDeleteClick = () => {
    setShowConfirmDelete(true);
  };

  const handleConfirmDelete = () => {
    setIsDeleting(true);
    onDelete(todo.id);
    setShowConfirmDelete(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmDelete(false);
  };

  const handleEdit = () => {
    if (onEdit && !todo.completed) {
      const newText = prompt('Edit todo:', todo.text);
      if (newText && newText.trim() !== '' && newText.trim() !== todo.text) {
        onEdit(todo.id, newText.trim());
      }
    }
  };

  return (
    <div className={`todo-item group ${todo.completed ? 'completed' : ''}`}>
      {/* Mobile-first responsive layout */}
      <div className="flex items-center gap-3 p-3 sm:p-4">
        {/* Toggle checkbox */}
        <div 
          className={`todo-checkbox tap-target ${todo.completed ? 'checked' : ''}`}
          onClick={handleToggle}
          role="checkbox"
          aria-checked={todo.completed}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleToggle();
            }
          }}
        >
          {todo.completed && (
            <svg 
              className="w-3 h-3 text-white" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path 
                fillRule="evenodd" 
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
          )}
        </div>

        {/* Todo text */}
        <div 
          className={`todo-text ${todo.completed ? 'completed' : ''}`}
          onDoubleClick={handleEdit}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.shiftKey) {
              handleEdit();
            }
          }}
          title={onEdit && !todo.completed ? 'Double-click to edit' : ''}
        >
          <span className="text-sm sm:text-base leading-relaxed">
            {todo.text}
          </span>
          {todo.updatedAt && todo.updatedAt.getTime() !== todo.createdAt.getTime() && (
            <span className="text-xs text-gray-400 block mt-1">
              Edited {todo.updatedAt.toLocaleString()}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1 sm:gap-2 ml-auto">
          {/* Edit button (Phase 2) */}
          {onEdit && !todo.completed && (
            <button
              className="btn-icon text-gray-400 hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleEdit}
              aria-label="Edit todo"
              title="Edit todo"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          )}

          {/* Delete button */}
          <button
            className="btn-icon text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleDeleteClick}
            disabled={isDeleting}
            aria-label="Delete todo"
            title="Delete todo"
          >
            {isDeleting ? (
              <div className="loading-spinner"></div>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Delete confirmation modal */}
      {showConfirmDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 animate-scale-in">
            <h3 className="text-lg font-semibold mb-2">Delete Todo</h3>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete "{todo.text}"?
            </p>
            <div className="flex gap-3 justify-end">
              <button
                className="btn-secondary"
                onClick={handleCancelDelete}
              >
                Cancel
              </button>
              <button
                className="btn-danger"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}