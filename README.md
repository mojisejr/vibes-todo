# Todo App Demo

A simple todo application built with Next.js 14 to learn AI-assisted development workflow using Claude Code + Manual Git Flow.

## 🎯 Learning Objectives

- Master Context Engineering techniques
- Understand Sub-Agent coordination (local Claude Code)
- Practice Manual Git Flow
- Build foundation for larger projects

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Storage**: localStorage
- **Styling**: Tailwind CSS + DaisyUI
- **Language**: TypeScript
- **Development**: Local Claude Code + Manual Git

## 🚀 Features

### Phase 1: Basic CRUD ✅

- [ ] Add new todos
- [ ] Mark todos as complete/incomplete
- [ ] Delete todos
- [ ] Filter todos (All/Active/Completed)
- [ ] Responsive mobile design
- [ ] Data persistence

### Phase 2: Enhanced Features

- [ ] Edit todos (double-click)
- [ ] Drag & drop reordering
- [ ] Animations and polish
- [ ] Keyboard shortcuts

## 🏗️ Development Workflow

### 1. Local Development

```bash
# Start new feature
git checkout -b feature/feature-name

# Use Claude Code for development
claude
# [Paste context engineering prompt]

# Commit changes
git add .
git commit -m "feat: description of feature"
git push origin feature/feature-name
```

### 2. Code Review (Optional)

- Create PR manually in GitHub
- Add `@claude review this code` comment for AI review

## 📁 Project Structure

```
todo-app-demo/
├── app/
│   ├── page.tsx          # Main todo interface
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── TodoItem.tsx      # Individual todo item
│   ├── TodoList.tsx      # Todo list container
│   ├── AddTodo.tsx       # Add todo form
│   └── FilterTabs.tsx    # Filter tabs
├── lib/
│   ├── storage.ts        # localStorage utilities
│   ├── types.ts          # TypeScript interfaces
│   └── utils.ts          # Helper functions
├── CLAUDE.md             # AI context file
└── README.md             # This file
```

## 🧩 Development Process

### Context Engineering Pattern

Every Claude Code session starts with:

```
อ่าน CLAUDE.md สำหรับ project context และสร้าง [feature] ด้วย parallel sub-agents:

Task 1: [Specific responsibility]
Task 2: [Specific responsibility]
Task 3: [Specific responsibility]
Task 4: Integration Agent (always required)

Deliverable: [Clear expected outcome]
```

## 📝 Development Log

### Phase 1: Project Setup

- [ ] Repository setup
- [ ] CLAUDE.md context creation
- [ ] Basic project structure

### Phase 2: Basic CRUD

- [ ] Next.js 14 setup
- [ ] Core components
- [ ] localStorage integration
- [ ] Manual testing

### Phase 3: Enhancement

- [ ] Edit functionality
- [ ] Drag & drop
- [ ] UX polish
- [ ] Deployment

## 🎓 Lessons Learned

_[Update this section as you progress]_

### What Worked Well:

-

### What Could Be Improved:

-

### Key Insights:

-

## 🚀 Next Steps

After mastering this workflow:

1. Apply same patterns to Farm Management System
2. Scale up to more complex features (authentication, database)
3. Explore team collaboration workflows

## 📚 Resources

- [Claude Code Documentation](https://docs.anthropic.com/claude-code)
- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [DaisyUI Components](https://daisyui.com/components/)

---

Built with ❤️ using AI-assisted development workflow
