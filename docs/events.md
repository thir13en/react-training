
# Event Handling in React

By convention, handler methods are named with the suffix `Handler` (e.g., `onClickHandler`).

## Common React Events
- `onClick`
- `onChange`
- `onSubmit`
- `onMouseEnter`, `onMouseLeave`
- `onKeyDown`, `onKeyUp`

See the full list of supported events in the [React docs](https://react.dev/reference/react-dom/components/common#events).

## Example
```jsx
function Button({ onClick }) {
	return <button onClick={onClick}>Click me</button>;
}
```

## Best Practices
- Use descriptive handler names (e.g., `handleClick`, `handleSubmit`)
- Avoid inline functions in render for performance-critical components
- Use event delegation for lists when possible

## Exercises
1. Add an `onClick` event to a button that updates state.
2. Create a form with `onSubmit` and prevent the default action.

---

_See also: [JSX](jsx.md), [Components](components.md)_
