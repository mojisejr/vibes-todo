// TypeScript interfaces for Todo App
// Based on CLAUDE.md specifications

/**
 * Core Todo interface with all required properties
 */
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

/**
 * Filter options for displaying todos
 */
export type TodoFilter = "all" | "active" | "completed";

/**
 * Props for TodoItem component
 */
export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit?: (id: string, newText: string) => void;
}

/**
 * Props for TodoList component
 */
export interface TodoListProps {
  todos: Todo[];
  filter: TodoFilter;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

/**
 * Props for AddTodo component
 */
export interface AddTodoProps {
  onAdd: (text: string) => void;
}

/**
 * Props for FilterTabs component
 */
export interface FilterTabsProps {
  currentFilter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
  counts: {
    all: number;
    active: number;
    completed: number;
  };
}

/**
 * Storage operation result types
 */
export interface StorageResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

/**
 * Validation error types
 */
export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Todo creation data (without id and dates)
 */
export interface CreateTodoData {
  text: string;
  completed?: boolean;
}

/**
 * Todo update data (partial updates)
 */
export interface UpdateTodoData {
  text?: string;
  completed?: boolean;
}

/**
 * Filter counts for UI display
 */
export interface FilterCounts {
  all: number;
  active: number;
  completed: number;
}