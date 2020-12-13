# JSX


It is syntactic sugar over Javascript to interact with HTML elements.

Let's see how it translated:
```javascript
function App() {
	return (
		<div className="App">
			<h1>Hi, I am a React App</h1>
		</div>
	);
}
```

Would be transpiled to:
```javascript
// the second argument is config
React.createElement('div', { className: 'App' }, React.createElement('h1',, null, 'Hi, Im a React App'));
```

### Restrictions
Remember JSX is not html, that's why some attributes such as `class` can be used in detriment of `className`. This means that we actually are using the `tags` and `attributes` that is being provided by react. Another restriction is that we actually need to return **one** root element, so we need to wrap our content.