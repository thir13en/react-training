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

### Conditional rendering
For if statements:
```jsx
{ boolean && <p>My Jsx Block</p> } // will render the block when boolean is true
```
For ir else
```jsx
{ boolean ? <p>My Jsx Block</p> : <p>The else block</p> }
```
Another way to output conditional content is to assign `JSX` code or a `null` value to a certain variable:
```jsx
render() {
	let persons = null; 
	if (this.state.peopleVisible) {
		persons = (
			<p>I am a female</p>
			<p>Hey, I am a dude</p>
			<p>I am transgender, bruh</p>
		);
	}

	return persons;
}
```

### Transform Array to JSX element set
You do it with the vanilla JavaScript `map` operator, where for every element, you map it to a JSX structure where the values are included in the appropriate spots.