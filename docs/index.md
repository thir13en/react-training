
# React Notes Index

Welcome to the React notes! This documentation covers the core concepts, best practices, and advanced topics in React. Use the table of contents below to navigate.

## Table of Contents
1. [General Overview](general.md)
2. [Bootstrapping a React App](bootstrapping.md)
3. [Components](components.md)
4. [Create React App (CRA)](cra.md)
5. [Debugging React Apps](debugging.md)
6. [Event Handling](events.md)
7. [Higher-Order Components (HOC)](hoc.md)
8. [Hooks](hooks/index.md)
	- [useState](hooks/useState.md)
	- [useRef](hooks/useRef.md)
9. [JSX Syntax](jsx.md)
10. [Performance Optimization](performance.md)
11. [State Management & Context](state.md)
12. [Styling in React](styling.md)
13. [Virtual DOM](virtual-dom.md)
14. [React Training Overview](react-training.md)

---

## Quick Reference: Why Do Components Render?

1. State change in the component itself
2. Parent component re-renders (child is part of parent)
3. Context value change (e.g., Redux, React Context)
4. Props change (if not memoized)

### Performance Optimization Tips
- Keep state as localized as possible
- Use `useMemo` for expensive calculations or object references
- Use `React.memo` to memoize components
- Prefer functional components and hooks for new code

---

## Best Practices
- Use clear and consistent naming conventions (PascalCase for components)
- Prefer functional components and hooks
- Write small, reusable components
- Add PropTypes or TypeScript for type safety
- Write tests for critical components ([Testing](react-training.md))
- Ensure accessibility ([Accessibility Tips](react-training.md))

---

## Related Topics
- [JSX](jsx.md)
- [Hooks](hooks/index.md)
- [State Management](state.md)
- [Performance](performance.md)

---

_For more details, see each section above. Practice exercises are included at the end of each note._