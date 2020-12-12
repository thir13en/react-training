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