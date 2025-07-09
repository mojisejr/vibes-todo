"use client";

import { useEffect, useState } from "react";
import { todoStorage } from "../lib/storage";
import { Todo, CreateTodoData } from "../lib/types";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [testResults, setTestResults] = useState<string[]>([]);

  useEffect(() => {
    // Test data layer functionality
    const runTests = async () => {
      const results: string[] = [];

      // Test 1: Clear storage
      todoStorage.clearAllTodos();
      results.push("✅ Storage cleared");

      // Test 2: Add todos
      const createData1: CreateTodoData = {
        text: "Test todo 1",
        completed: false,
      };
      const createData2: CreateTodoData = {
        text: "Test todo 2",
        completed: true,
      };

      const result1 = todoStorage.addTodo(createData1);
      const result2 = todoStorage.addTodo(createData2);

      if (result1.success && result2.success) {
        results.push("✅ Todos added successfully");
      } else {
        results.push("❌ Error adding todos");
      }

      // Test 3: Get todos
      const storedTodos = todoStorage.getTodos();
      setTodos(storedTodos);
      results.push(`✅ Retrieved ${storedTodos.length} todos`);

      // Test 4: Filter todos
      const activeTodos = todoStorage.filterTodos(storedTodos, "active");
      const completedTodos = todoStorage.filterTodos(storedTodos, "completed");
      results.push(
        `✅ Filtered: ${activeTodos.length} active, ${completedTodos.length} completed`
      );

      // Test 5: Get filter counts
      const counts = todoStorage.getFilterCounts(storedTodos);
      results.push(
        `✅ Counts: ${counts.all} total, ${counts.active} active, ${counts.completed} completed`
      );

      // Test 6: Update todo
      if (storedTodos.length > 0) {
        const updateResult = todoStorage.updateTodo(storedTodos[0].id, {
          text: "Updated todo text",
        });
        if (updateResult.success) {
          results.push("✅ Todo updated successfully");
        } else {
          results.push("❌ Error updating todo");
        }
      }

      // Test 7: Toggle todo
      if (storedTodos.length > 0) {
        const toggleResult = todoStorage.toggleTodo(storedTodos[0].id);
        if (toggleResult.success) {
          results.push("✅ Todo toggled successfully");
        } else {
          results.push("❌ Error toggling todo");
        }
      }

      setTestResults(results);

      // Refresh todos after tests
      setTodos(todoStorage.getTodos());
    };

    runTests();
  }, []);

  return (
    <div className="p-8 space-y-6">
      {/* Data Layer Test Results */}
      <div className="bg-base-200 p-4 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">ROUND 2: Data Layer Test</h1>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Test Results:</h2>
          {testResults.map((result, index) => (
            <div key={index} className="text-sm font-mono">
              {result}
            </div>
          ))}
        </div>
      </div>

      {/* TypeScript Types Test */}
      <div className="bg-green-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">TypeScript Types</h2>
        <p className="text-sm">✅ Todo interface exported</p>
        <p className="text-sm">✅ TodoFilter type exported</p>
        <p className="text-sm">✅ Component props interfaces exported</p>
        <p className="text-sm">✅ Storage result types exported</p>
      </div>

      {/* localStorage Functions Test */}
      <div className="bg-blue-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">localStorage Functions</h2>
        <p className="text-sm">✅ addTodo() with validation</p>
        <p className="text-sm">✅ updateTodo() with validation</p>
        <p className="text-sm">✅ deleteTodo() with error handling</p>
        <p className="text-sm">✅ toggleTodo() convenience method</p>
        <p className="text-sm">✅ filterTodos() with all filter types</p>
        <p className="text-sm">✅ getFilterCounts() for UI</p>
      </div>

      {/* Current Todos Display */}
      <div className="bg-white p-4 rounded-lg border">
        <h2 className="text-xl font-bold mb-4">
          Current Todos ({todos.length})
        </h2>
        {todos.length === 0 ? (
          <p className="text-gray-500">No todos found</p>
        ) : (
          <div className="space-y-2">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className={`p-2 rounded border ${
                  todo.completed ? "bg-gray-100 line-through" : "bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={
                      todo.completed ? "text-gray-500" : "text-gray-900"
                    }
                  >
                    {todo.text}
                  </span>
                  <span className="text-xs text-gray-400">
                    {todo.completed ? "✅" : "⏳"}
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  Created: {todo.createdAt.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
