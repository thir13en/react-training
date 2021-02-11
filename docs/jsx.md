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

### Workarounds to returning Adjacent JSX elements
The first workaround is to return an `Array` of adjacent elements, as long as all the elements have a key. So either you proceed with a `map`, or you could just do like this:
```jsx
function App() {
	// note the array wrapper!
	return [
		<h1 key="el1">Hi, I am a React Element</h1>,
		<h1 key="el2">Hi, I am a React Element</h1>,
		<h1 key="el3">Hi, I am a React Element</h1>,
		<h1 key="el4">Hi, I am a React Element</h1>,
	];
}
```

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
```javascript
const persons = [
	{ name: 'John', },
	{ name: 'Anna', },
	{ name: 'Natalia', },
	{ name: 'Santi', },
];

render() {
	return (
		<>
			{persons.map((person, index) => <Person key={index} name={person.name} />)}
		</>
	);
}
```

### Get a JSX element reference
```javascript
function App() {
	return [
		<h1 key="el1">Hi, I am a React Element</h1>,
		<h1 key="el2">Hi, I am a React Element</h1>,
		<h1 key="el3">Hi, I am a React Element</h1>,
		<h1 key="el4">Hi, I am a React Element</h1>,
		<div>
			<input placeholder="my reference" ref={input => input.focus()} />
		</div>,
	];
}
```
Or keep the elementReference
```javascript
export default class App extends Component {
	// Since render runs BEFORE componentDidMount, we can access the reference
	componentDidMount() {
		this.inputElement.focus();
	}

	render() {
		return (
			<div>
				<input placeholder="my reference" ref={input => this.inputElement = input} />
			</div>,
		);
	};
}
```
More modern approach, since react 16
```javascript
import React from 'react';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.inputElementRef = React.createRef();
	}

	componentDidMount() {
		// Here's how to access
		this.inputElementRef.current.focus();
	}

	render() {
		return (
			<div>
				<input placeholder="my reference" ref={this.inputElementRef} />
			</div>,
		);
	};
}
```