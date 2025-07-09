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
2. Round-based development → Claude Code with paired prompts per round
3. Git workflow → Manual test and commit per round
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

#### Basic CRUD Feature Pattern - 4 Paired Sub-Agents:

```
สร้าง Todo App ด้วย 4 คู่ของ parallel sub-agents:

Context: อ่าน CLAUDE.md นี้เพื่อเข้าใจ project requirements

## 🔧 Pair 1: Foundation Setup (Priority: High)
Sub-Agent A: Complete Next.js App Router setup
- Create app/layout.tsx with root layout and metadata
- Setup proper HTML structure and viewport settings
- Configure TypeScript and Next.js 14 App Router

Sub-Agent B: Setup Tailwind CSS configuration
- Create tailwind.config.js with DaisyUI plugin
- Create app/globals.css with Tailwind directives
- Configure responsive breakpoints and custom colors

Benefits: Related functionality, independent files, compatible timeline

## 📊 Pair 2: Data Layer (Priority: High)
Sub-Agent A: Create TypeScript interfaces
- Build lib/types.ts with Todo interface and TodoFilter type
- Define strict typing for all data structures
- Export types for component usage

Sub-Agent B: Implement localStorage utilities
- Build lib/storage.ts with CRUD operations
- Implement data persistence and retrieval
- Add error handling and validation logic

Benefits: Related functionality, independent files, Task B uses types from Task A

## 🎯 Pair 3: Core Components (Priority: Medium)
Sub-Agent A: Create TodoItem component
- Build components/TodoItem.tsx with display, toggle, delete
- Implement responsive design with mobile-first approach
- Add proper event handlers and TypeScript props

Sub-Agent B: Create AddTodo component
- Build components/AddTodo.tsx with input validation
- Implement submit handling and form validation
- Add proper UX feedback and error states

Benefits: Related functionality, independent files, both use types from Pair 2

## 🔗 Pair 4: Final Integration (Priority: Low)
Sub-Agent A: Create FilterTabs component
- Build components/FilterTabs.tsx with All/Active/Completed
- Implement filtering logic and active state styling
- Add touch-friendly mobile interactions

Sub-Agent B: Create main page integration
- Build app/page.tsx connecting all components
- Implement complete data flow and state management
- Test responsive design and complete user workflow

Benefits: Related functionality, Task B depends on Task A + all previous components

## 🔄 Round-Based Development Workflow:

### Implementation Strategy: CLAUDE → PROMPT → TEST → COMMIT

**Development Cycle Pattern:**
# Round 1 (Foundation) → claude → [paired prompt] → manual test → git commit
# Round 2 (Core) → claude → [paired prompt] → manual test → git commit
# Round 3 (Features) → claude → [paired prompt] → manual test → git commit
# Round 4 (Integration) → claude → [paired prompt] → manual test → git commit → Done!

### Round Execution Process:

**🔧 ROUND 1: Foundation Setup**
- **Prompt**: "สร้าง Next.js App Router + Tailwind CSS foundation ตาม CLAUDE.md spec"
- **Goal**: Establish Next.js App Router + Tailwind CSS foundation
- **Test Requirements**: Dev server starts, Tailwind works, TypeScript compiles
- **Commit**: "feat: setup Next.js App Router and Tailwind CSS foundation"

**📊 ROUND 2: Data Layer**
- **Prompt**: "สร้าง TypeScript interfaces + localStorage utilities ตาม CLAUDE.md spec"
- **Goal**: Create TypeScript interfaces + localStorage utilities
- **Test Requirements**: Types export correctly, storage functions work
- **Commit**: "feat: implement TypeScript interfaces and localStorage utilities"

**🎯 ROUND 3: Core Components**
- **Prompt**: "สร้าง TodoItem + AddTodo components ตาม CLAUDE.md spec"
- **Goal**: Build TodoItem + AddTodo components
- **Test Requirements**: Components render, props work, responsive design
- **Commit**: "feat: create TodoItem and AddTodo components"

**🔗 ROUND 4: Final Integration**
- **Prompt**: "สร้าง FilterTabs + Main page integration ตาม CLAUDE.md spec"
- **Goal**: Complete FilterTabs + Main page integration
- **Test Requirements**: Full CRUD works, responsive across devices
- **Commit**: "feat: complete FilterTabs and main page integration"

### Quality Gates per Round:
- ✅ TypeScript compilation successful
- ✅ Manual testing passes
- ✅ Mobile-first design works
- ✅ Components integrate properly
- ✅ PROGRESS.md updated

### Workflow Benefits:
1. **Token Management**: 2 agents per round reduces context usage
2. **Timeout Prevention**: Smaller scope prevents timeouts
3. **Clear Dependencies**: Each pair has defined prerequisites
4. **Testing Points**: Test after each paired prompt completion
5. **Progress Tracking**: Update PROGRESS.md after each commit

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

### Round-Based Development Flow:

```bash
# Start feature branch
git checkout -b feature/todo-crud

# ROUND 1: Foundation Setup
# Prompt: "สร้าง Next.js App Router + Tailwind CSS foundation ตาม CLAUDE.md spec"
# [Execute paired sub-agents]
npm run dev  # Manual test
git add .
git commit -m "feat: setup Next.js App Router and Tailwind CSS foundation"

# ROUND 2: Data Layer
# Prompt: "สร้าง TypeScript interfaces + localStorage utilities ตาม CLAUDE.md spec"
# [Execute paired sub-agents]
npm run dev  # Manual test
git add .
git commit -m "feat: implement TypeScript interfaces and localStorage utilities"

# ROUND 3: Core Components
# Prompt: "สร้าง TodoItem + AddTodo components ตาม CLAUDE.md spec"
# [Execute paired sub-agents]
npm run dev  # Manual test
git add .
git commit -m "feat: create TodoItem and AddTodo components"

# ROUND 4: Final Integration
# Prompt: "สร้าง FilterTabs + Main page integration ตาม CLAUDE.md spec"
# [Execute paired sub-agents]
npm run dev  # Manual test
git add .
git commit -m "feat: complete FilterTabs and main page integration"

# Final validation
npm run build  # Production build test
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

1. **Round-Based Development**: Complete each round before moving to next
2. **Test After Each Round**: Manual testing required before each commit
3. **Mobile First**: Design and test on mobile viewport first
4. **Git Discipline**: One commit per round with clear messages
5. **Progress Tracking**: Update PROGRESS.md after each round completion
6. **Quality Gates**: All TypeScript errors must be resolved before commit

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
2. **Round-Based Execution**: ทำทีละ round ตาม sequence
3. **Paired Prompts**: ใช้ prompt ที่กำหนดไว้สำหรับแต่ละ round
4. **Manual Testing**: ทดสอบหลังจาก development ของทุก round
5. **Git Discipline**: Commit หลังจาก manual test เสร็จสิ้น
6. **Progress Tracking**: Update PROGRESS.md ทุก round
7. **Quality Control**: Resolve TypeScript errors ก่อน commit

### Round Prompt Templates:

- **ROUND 1**: "สร้าง Next.js App Router + Tailwind CSS foundation ตาม CLAUDE.md spec"
- **ROUND 2**: "สร้าง TypeScript interfaces + localStorage utilities ตาม CLAUDE.md spec"
- **ROUND 3**: "สร้าง TodoItem + AddTodo components ตาม CLAUDE.md spec"
- **ROUND 4**: "สร้าง FilterTabs + Main page integration ตาม CLAUDE.md spec"

## Quick Reference

### Round Execution:

1. "อ่าน CLAUDE.md และทำ Round 1: Foundation Setup ตาม paired sub-agent pattern"
2. Manual test → git commit
3. "อ่าน CLAUDE.md และทำ Round 2: Data Layer ตาม paired sub-agent pattern"
4. Manual test → git commit
5. "อ่าน CLAUDE.md และทำ Round 3: Core Components ตาม paired sub-agent pattern"
6. Manual test → git commit
7. "อ่าน CLAUDE.md และทำ Round 4: Integration ตาม paired sub-agent pattern"
8. Manual test → git commit → Complete!

### If Timeout:

- Escape → "สรุปความคืบหน้า" → "ทำทีละ task"

### Progress Tracking:

```bash
echo "Round X: [description] ✅" >> PROGRESS.md
```
