# Todo App Demo - Local Development Context

## Project Overview

Simple Todo App เพื่อเรียนรู้ AI-assisted development workflow ด้วย Claude Code (Local) + Manual Git Flow

## Learning Objectives

1. Master Context Engineering techniques
2. Understand Sub-Agent coordination (local)
3. Practice Manual Git Flow
4. Build foundation for larger projects

## Development Workflow

### Local Claude Code + Manual Git Flow

```
1. Feature planning → Create GitHub Issue (manual documentation)
2. Local development → Claude Code with parallel sub-agents
3. Git workflow → Manual commit, push, PR creation
4. Code review → Optional @claude review in PR comments
5. Deploy → Manual or simple automation
```

## Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Storage**: localStorage (browser storage)
- **Styling**: Tailwind CSS + DaisyUI
- **TypeScript**: For type safety
- **Deployment**: Vercel (manual deploy)
- **Development**: Local Claude Code + Manual Git

## Features Required

### Phase 1: Basic CRUD (เป้าหมายแรก)

1. **Add Todo**: Input field + submit button
2. **Display Todos**: List of all todos
3. **Toggle Complete**: Mark as done/undone
4. **Delete Todo**: Remove from list
5. **Filter Todos**: Show All/Active/Completed

### Phase 2: Enhanced Features (ขยายผล)

1. **Edit Todo**: Double-click to edit inline
2. **Drag & Drop**: Reorder todos
3. **Persist Data**: Save to localStorage
4. **Responsive Design**: Mobile-first approach
5. **Polish**: Animations, loading states

## Local Development Patterns

### Sub-Agent Templates for Local Claude Code

#### Basic CRUD Feature Pattern:

```
สร้าง Todo App ด้วย parallel sub-agents:

Context: อ่าน CLAUDE.md นี้เพื่อเข้าใจ project requirements

Task 1: Project Setup Agent
- Next.js 14 project structure
- Tailwind CSS + DaisyUI configuration
- TypeScript setup
- Basic folder organization

Task 2: UI Components Agent
- TodoItem component (display, toggle, delete)
- TodoList component (container + filtering)
- AddTodo component (input form + validation)
- FilterTabs component (All/Active/Completed)

Task 3: Data Management Agent
- localStorage utility functions
- CRUD operations (create, read, update, delete)
- TypeScript interfaces and types
- Data validation logic

Task 4: Integration Agent
- Connect all components to data layer
- Test complete user workflow
- Ensure responsive design works
- Fix any integration issues

Deliverable: Working todo app ที่ทำงานได้ครบถ้วน
```

#### Enhancement Feature Pattern:

```
เพิ่ม advanced features ให้ Todo App:

Context:
- อ่าน CLAUDE.md สำหรับ context
- Build บน existing codebase
- ไม่ทำลาง features ที่มีอยู่

Task 1: Edit Feature Agent
- Double-click to edit functionality
- Inline editing interface
- Save/cancel with Enter/Escape

Task 2: Drag & Drop Agent
- Reorder todos with drag & drop
- Visual feedback during drag
- Update order in localStorage

Task 3: UX Polish Agent
- Loading states และ animations
- Error handling และ validation
- Mobile touch interactions

Task 4: Testing Agent
- Test all features ทำงานร่วมกัน
- Cross-browser compatibility
- Mobile responsive validation

Deliverable: Enhanced todo app พร้อม advanced features
```

## Git Workflow Commands

### Feature Development Flow:

```bash
# Start new feature
git checkout -b feature/todo-crud
# OR
git checkout -b feature/todo-enhancement

# After Claude Code development
git add .
git commit -m "feat: implement todo CRUD with parallel sub-agents"
# OR
git commit -m "feat: add edit and drag-drop functionality"

# Push to GitHub
git push origin feature/todo-crud

# Create PR manually in GitHub UI
# Optional: Add @claude review comment in PR
```

### Commit Message Conventions:

```
feat: new feature
fix: bug fix
docs: documentation changes
style: formatting, no code change
refactor: code change that neither fixes a bug nor adds a feature
test: adding missing tests
chore: changes to build process or auxiliary tools
```

## Project Structure

```
todo-app-demo/
├── app/
│   ├── page.tsx (main todo interface)
│   ├── layout.tsx (root layout)
│   └── globals.css (global styles)
├── components/
│   ├── TodoItem.tsx
│   ├── TodoList.tsx
│   ├── AddTodo.tsx
│   └── FilterTabs.tsx
├── lib/
│   ├── storage.ts (localStorage utilities)
│   ├── types.ts (TypeScript interfaces)
│   └── utils.ts (helper functions)
├── CLAUDE.md (this file)
├── package.json
├── README.md
└── .gitignore
```

## Component Specifications

### TodoItem Component

```typescript
interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit?: (id: string, newText: string) => void;
}
```

- Display todo text and completion status
- Toggle button for mark complete/incomplete
- Delete button with confirmation
- Edit functionality (double-click for Phase 2)
- Responsive design for mobile

### TodoList Component

```typescript
interface TodoListProps {
  todos: Todo[];
  filter: "all" | "active" | "completed";
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}
```

- Container for TodoItem components
- Apply filtering logic
- Empty state message
- Responsive grid/list layout

### AddTodo Component

```typescript
interface AddTodoProps {
  onAdd: (text: string) => void;
}
```

- Input field for new todo text
- Submit button or Enter key submit
- Input validation (non-empty, max length)
- Clear input after successful submit

### FilterTabs Component

```typescript
interface FilterTabsProps {
  currentFilter: "all" | "active" | "completed";
  onFilterChange: (filter: string) => void;
  counts: { all: number; active: number; completed: number };
}
```

- Three tabs: All, Active, Completed
- Highlight active filter
- Show count for each category
- Mobile-friendly touch targets

## Data Management

### Todo Interface

```typescript
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

type TodoFilter = "all" | "active" | "completed";
```

### Storage Functions

```typescript
// lib/storage.ts
export const todoStorage = {
  getTodos: (): Todo[] => {
    /* localStorage logic */
  },
  saveTodos: (todos: Todo[]) => {
    /* localStorage logic */
  },
  addTodo: (text: string): Todo => {
    /* create and save */
  },
  updateTodo: (id: string, updates: Partial<Todo>): Todo => {
    /* update logic */
  },
  deleteTodo: (id: string): boolean => {
    /* delete logic */
  },
  filterTodos: (todos: Todo[], filter: TodoFilter): Todo[] => {
    /* filter logic */
  },
};
```

## Quality Standards

- **Code Quality**: Clean, readable, maintainable TypeScript
- **Components**: Reusable, single responsibility
- **Responsive**: Mobile-first design with Tailwind
- **Performance**: Fast loading, smooth interactions
- **Accessibility**: Keyboard navigation, semantic HTML
- **Error Handling**: Graceful failures, user feedback

## Development Rules

1. **Feature-Complete**: Finish each phase completely before moving to next
2. **Test Manually**: Verify functionality works before git commit
3. **Mobile First**: Design and test on mobile viewport first
4. **Git Discipline**: Clear commit messages, logical commits
5. **Documentation**: Update README with completed features

## Success Criteria

### Phase 1: Basic CRUD ✅

- [ ] Can add new todos with validation
- [ ] Can mark todos as complete/incomplete
- [ ] Can delete todos with confirmation
- [ ] Can filter by All/Active/Completed
- [ ] Responsive design works on mobile
- [ ] Data persists in localStorage
- [ ] Clean TypeScript code with no errors

### Phase 2: Enhanced Features ✅

- [ ] Can edit todos by double-clicking
- [ ] Drag and drop reordering works
- [ ] Smooth animations and transitions
- [ ] Loading states for operations
- [ ] Error handling for edge cases
- [ ] Keyboard shortcuts work
- [ ] Accessibility features implemented

### Phase 3: Deployment & Polish ✅

- [ ] Deployed to Vercel successfully
- [ ] Performance optimized
- [ ] Cross-browser compatibility
- [ ] Mobile testing completed
- [ ] Documentation complete
- [ ] Ready for next project (Farm Management)

## Next Project Preparation

หลังจากเรียนรู้ workflow นี้แล้ว จะนำไปประยุกต์กับ Farm Management System:

- ใช้ same context engineering patterns
- ใช้ same sub-agent coordination
- ใช้ same git workflow
- Scale up complexity (database, authentication, etc.)

## Local Development Tips

1. **Context Management**: อ่าน CLAUDE.md ในทุก prompt
2. **Sub-Agent Clarity**: ให้ instructions ชัดเจนสำหรับแต่ละ agent
3. **Integration Focus**: เสมอมี Integration Agent เป็น task สุดท้าย
4. **Manual Testing**: ทดสอบทุก feature หลังจาก development
5. **Git Discipline**: Commit เมื่อ feature สมบูรณ์
