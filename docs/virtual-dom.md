
# Virtual DOM

React uses a Virtual DOM to efficiently update the UI. On every prop or state change, React creates a new Virtual DOM tree and compares it to the previous one (a process called "reconciliation"). Only the parts of the real DOM that changed are updated.

## Why use the Virtual DOM?
- Improves performance by minimizing direct DOM manipulations
- Enables declarative UI updates

## Why use `key` in lists?
The `key` prop helps React identify which items have changed, are added, or are removed. This makes list rendering more efficient and prevents unnecessary re-renders.

## How does React update the DOM?
1. State or props change triggers a re-render
2. React creates a new Virtual DOM tree
3. React diffs the new tree with the previous one
4. Only the changed parts are updated in the real DOM

### Example
```jsx
{items.map(item => <li key={item.id}>{item.name}</li>)}
```

## Best Practices
- Always provide a unique `key` prop for list items
- Avoid using array index as key unless items are static

## Exercises
1. Render a list of items and experiment with/without the `key` prop
2. Observe performance differences in large lists

---

_See also: [Performance](performance.md), [JSX](jsx.md)_