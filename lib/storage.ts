// localStorage utilities for Todo App
// Based on CLAUDE.md specifications

import { Todo, TodoFilter, CreateTodoData, UpdateTodoData, StorageResult, ValidationError } from './types';

const STORAGE_KEY = 'vibes-todos';

/**
 * Utility functions for localStorage operations
 */
class TodoStorage {
  /**
   * Get all todos from localStorage
   */
  getTodos(): Todo[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return [];
      
      const todos = JSON.parse(stored);
      // Convert date strings back to Date objects
      return todos.map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
        updatedAt: todo.updatedAt ? new Date(todo.updatedAt) : undefined,
      }));
    } catch (error) {
      console.error('Error getting todos from localStorage:', error);
      return [];
    }
  }

  /**
   * Save todos to localStorage
   */
  saveTodos(todos: Todo[]): StorageResult<void> {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      return { success: true };
    } catch (error) {
      console.error('Error saving todos to localStorage:', error);
      return { 
        success: false, 
        error: 'Failed to save todos to localStorage' 
      };
    }
  }

  /**
   * Generate unique ID for new todos
   */
  private generateId(): string {
    return `todo-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
  }

  /**
   * Validate todo text
   */
  private validateTodoText(text: string): ValidationError[] {
    const errors: ValidationError[] = [];
    
    if (!text || text.trim().length === 0) {
      errors.push({ field: 'text', message: 'Todo text cannot be empty' });
    }
    
    if (text.length > 280) {
      errors.push({ field: 'text', message: 'Todo text must be 280 characters or less' });
    }
    
    return errors;
  }

  /**
   * Add a new todo
   */
  addTodo(data: CreateTodoData): StorageResult<Todo> {
    const errors = this.validateTodoText(data.text);
    if (errors.length > 0) {
      return { 
        success: false, 
        error: errors[0].message 
      };
    }

    const now = new Date();
    const newTodo: Todo = {
      id: this.generateId(),
      text: data.text.trim(),
      completed: data.completed || false,
      createdAt: now,
      updatedAt: now,
    };

    const todos = this.getTodos();
    todos.push(newTodo);
    
    const saveResult = this.saveTodos(todos);
    if (!saveResult.success) {
      return { success: false, error: saveResult.error };
    }

    return { success: true, data: newTodo };
  }

  /**
   * Update an existing todo
   */
  updateTodo(id: string, updates: UpdateTodoData): StorageResult<Todo> {
    if (updates.text !== undefined) {
      const errors = this.validateTodoText(updates.text);
      if (errors.length > 0) {
        return { 
          success: false, 
          error: errors[0].message 
        };
      }
    }

    const todos = this.getTodos();
    const todoIndex = todos.findIndex(todo => todo.id === id);
    
    if (todoIndex === -1) {
      return { 
        success: false, 
        error: 'Todo not found' 
      };
    }

    const updatedTodo: Todo = {
      ...todos[todoIndex],
      ...updates,
      updatedAt: new Date(),
    };

    // Trim text if it's being updated
    if (updates.text !== undefined) {
      updatedTodo.text = updates.text.trim();
    }

    todos[todoIndex] = updatedTodo;
    
    const saveResult = this.saveTodos(todos);
    if (!saveResult.success) {
      return { success: false, error: saveResult.error };
    }

    return { success: true, data: updatedTodo };
  }

  /**
   * Delete a todo
   */
  deleteTodo(id: string): StorageResult<boolean> {
    const todos = this.getTodos();
    const initialLength = todos.length;
    const filteredTodos = todos.filter(todo => todo.id !== id);
    
    if (filteredTodos.length === initialLength) {
      return { 
        success: false, 
        error: 'Todo not found' 
      };
    }

    const saveResult = this.saveTodos(filteredTodos);
    if (!saveResult.success) {
      return { success: false, error: saveResult.error };
    }

    return { success: true, data: true };
  }

  /**
   * Toggle todo completion status
   */
  toggleTodo(id: string): StorageResult<Todo> {
    const todos = this.getTodos();
    const todo = todos.find(todo => todo.id === id);
    
    if (!todo) {
      return { 
        success: false, 
        error: 'Todo not found' 
      };
    }

    return this.updateTodo(id, { completed: !todo.completed });
  }

  /**
   * Filter todos based on completion status
   */
  filterTodos(todos: Todo[], filter: TodoFilter): Todo[] {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'all':
      default:
        return todos;
    }
  }

  /**
   * Get filter counts for UI
   */
  getFilterCounts(todos: Todo[]): { all: number; active: number; completed: number } {
    return {
      all: todos.length,
      active: todos.filter(todo => !todo.completed).length,
      completed: todos.filter(todo => todo.completed).length,
    };
  }

  /**
   * Clear all todos (for testing/reset)
   */
  clearAllTodos(): StorageResult<void> {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return { success: true };
    } catch (error) {
      console.error('Error clearing todos from localStorage:', error);
      return { 
        success: false, 
        error: 'Failed to clear todos from localStorage' 
      };
    }
  }

  /**
   * Check if localStorage is available
   */
  isStorageAvailable(): boolean {
    try {
      const test = 'localStorage-test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (error) {
      return false;
    }
  }
}

// Export singleton instance
export const todoStorage = new TodoStorage();

// Export class for testing
export { TodoStorage };