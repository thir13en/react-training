
# Performance Optimization in React

Optimizing performance in React apps ensures smooth user experiences, especially as your app grows.

## General Tips
- Move logic outside of JSX expressions when possible
- Keep components small and focused
- Minimize state and keep it as local as possible

## Avoid Unnecessary Re-renders
Use `React.memo` to memoize functional components so they only re-render when their props change.

### Example
```jsx
import React from 'react';

const Person = React.memo(function Person(props) {
	return (
		<p>I am {props.name} and I am {props.age} years old</p>
	);
});
```

## useMemo and useCallback
- `useMemo`: Memoize expensive calculations
- `useCallback`: Memoize callback functions to prevent unnecessary re-renders of child components

### Example
```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => { doSomething(a); }, [a]);
```

## When to Optimize
Only optimize when you notice performance issues. Premature optimization can add unnecessary complexity.

## Best Practices
- Profile your app with React DevTools
- Use lazy loading for large components (React.lazy, Suspense)
- Avoid unnecessary state in parent components

## Exercises
1. Refactor a component to use `React.memo` and measure the difference
2. Use `useMemo` to optimize a slow calculation in a component

---

_See also: [Virtual DOM](virtual-dom.md), [Hooks](hooks/index.md)_