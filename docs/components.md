# Components


In it's simplest form, a `Component` in `React` is just a function that returns a piece of `JSX`.  
The convention in `React` is that the folder name holding the component is in PascalCase, and inside, if your component is a function also follows PascalCase, otherwise, for `pure function components`, we use camelCase.  
The reason for using PascalCase in files, is because it's the way to make sure we don't collide with React's native lowercase JSX elements.

```javascript
import React from 'react';


const person = (props) => {
	return <p>I'm  aperson and I am {props.age} years old</p>;
}

export default person;
```

### Outputting Component Content with `children`
```javascript
// When using...
<Person>Some content...</Person>


import React from 'react';


const person = (props) => {
	return (
		<p>I'm  aperson and I am {props.age} years old</p>
		<p>{props.children}</p> // Some content...
	);

}

export default person;
```

### State
Every element that extends from `Component` has a property named `state`
```javascript
import React, { Component } from 'react';


class Person extends Component {
	state = {
		friends: [{ name: 'Tommy', age, 29}],
	}

	render() {
		return (
			<p>I'm  aperson and I am {props.age} years old</p>
			<p>{props.children}</p> // Some content...
			<p>Accessing state: {this.state.friends[0].name}</p> // Some content...
		);
	}

}

export default person;
```
To manipulate the state, you use the `setState` utility.

### Rendering stategy
React re-renders the DOM for every single change in `state` or `props`.

### Stateful vs Stateless
Functional components that only receive data and present it in a structured way, are **stateless** or **dummy/presentational** components, you should have as much of these as possible. On the other hand, **stateful, smart** components, contain state and business logic to process data, you want to restrict the appearance of those in your system.

### Common patterns
#### Passing handlers by reference
When you want to run logic of a handler contained in a parent component, you can pass the reference of that function to the child element in a prop, and then the child can run it.
#### Passing arguments to binded functions
Since you are passing functions by reference as event handlers, you cannot directly pass the arguments, rather you need to use the `bind` method of the function prototype to pass the arguments you wish to:
```jsx
<p onClick={this.myFunction.bind(this, 'arg1', 'arg2')}>Element</p>
```
Bear in mind that this is a very efficient syntax vs passing an anonymous function and returning the function call in it.

### Two way binding
You can create a function in the parent component that receives events from the child, like so:
```jsx
import React, { Component } from 'react';


class People extends Component {
	state = {
		name: 'Mike',
	};
	const nameChangedHandler = (event) => {
		this.setState({ name: event.target });
	}
	return (
		<Person name={props.name} changed={nameChangedHandler} />
	);
}

const Person = (props) => {
	return (
		<>
			<p>I am {props.name}</p>
			<input type="text" name="name" onChange={props.changed} value={props.name}/>
		</>
	);
}
```

### Dummy/Presentational/Stateless vs Smart/Container/Stateful components
 * Dummy/Presentational/Stateless -> Component that does NOT manage app state
 * Smart/Container/Stateful components -> Component that does manage state
 You should have many more stateLESS than stateFUL components.

#### Comparison
##### Function
* Access to state (`useState()`)
* no life-cycle hooks (only with `react-hooks`)

##### Class-based
* Access to state
* life-cycle hooks
* Access state and props via `this`