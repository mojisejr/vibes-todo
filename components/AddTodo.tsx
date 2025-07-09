'use client';

import { useState, useRef, useEffect } from 'react';
import { AddTodoProps } from '../lib/types';

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const validateInput = (value: string): string | null => {
    const trimmedValue = value.trim();
    
    if (trimmedValue.length === 0) {
      return 'Todo text cannot be empty';
    }
    
    if (trimmedValue.length > 280) {
      return 'Todo text must be 280 characters or less';
    }
    
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous error
    setError(null);
    
    // Validate input
    const validationError = validateInput(text);
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Call the onAdd callback
      await onAdd(text.trim());
      
      // Clear input and show success
      setText('');
      setShowSuccess(true);
      
      // Hide success message after 2 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
      
      // Focus input again
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } catch (err) {
      setError('Failed to add todo. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    
    // Clear error when user starts typing
    if (error) {
      setError(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
    
    if (e.key === 'Escape') {
      setText('');
      setError(null);
    }
  };

  const characterCount = text.length;
  const maxLength = 280;
  const isNearLimit = characterCount > maxLength * 0.8; // 80% of max length

  return (
    <div className="add-todo-container">
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Input field */}
        <div className="input-group">
          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              value={text}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="What needs to be done?"
              disabled={isSubmitting}
              className={`w-full px-4 py-3 pr-16 text-sm sm:text-base border rounded-lg transition-all duration-200 ${
                error 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label="Add new todo"
              aria-describedby={error ? 'error-message' : undefined}
            />
            
            {/* Character count */}
            {characterCount > 0 && (
              <div 
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-xs ${
                  isNearLimit ? 'text-orange-500' : 'text-gray-400'
                } ${characterCount > maxLength ? 'text-red-500' : ''}`}
              >
                {characterCount}/{maxLength}
              </div>
            )}
          </div>
          
          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting || text.trim().length === 0}
            className="btn-primary px-4 py-3 text-sm sm:text-base min-w-[80px] sm:min-w-[100px]"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="loading-spinner"></div>
                <span className="hidden sm:inline">Adding...</span>
              </div>
            ) : (
              <>
                <span className="hidden sm:inline">Add Todo</span>
                <span className="sm:hidden">Add</span>
              </>
            )}
          </button>
        </div>
        
        {/* Error message */}
        {error && (
          <div 
            id="error-message"
            className="text-red-500 text-sm flex items-center gap-2 animate-slide-down"
            role="alert"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}
        
        {/* Success message */}
        {showSuccess && (
          <div 
            className="text-green-500 text-sm flex items-center gap-2 animate-slide-down"
            role="alert"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Todo added successfully!
          </div>
        )}
      </form>
      
      {/* Helpful hints */}
      <div className="mt-4 text-xs text-gray-500 space-y-1">
        <p>💡 Press Enter to add, Escape to clear</p>
        <p>📱 Mobile-friendly design with touch targets</p>
      </div>
    </div>
  );
}