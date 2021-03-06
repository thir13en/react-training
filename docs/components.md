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

### GOTCHA: correct use of setState
You should **NEVER** access the state in a `setState` call, because `React` will only update the render when it has resources available **AFTER** `setState` was called, and this is asynchronous and does not guarantee sync with the view, so the `state` is not guaranteed to be the latest updated state at the moment of using it.  
Instead, you should use the arrow function syntax for updating state:
```jsx
import React, { Component } from 'react';


class People extends Component {
	state = {
		name: 'Mike',
	};
	const nameChangedHandler = (event) => {
		this.setState((prevState, props) => ({ name: event.target, counter: prevState + 1 }));
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

### Provide the exact props that a component should receive
You should install the package `prop-types`, build and maintained by the React Community.
```jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class People extends Component {
	state = {
		name: 'Mike',
	};
	const nameChangedHandler = (event) => {
		this.setState((prevState, props) => ({ name: event.target, counter: prevState + 1 }));
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

person.propTypes = {
	handler: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func,
};

export default Person;
```

### Dummy/Presentational/Stateless vs Smart/Container/Stateful components
 * Dummy/Presentational/Stateless -> Component that does NOT manage app state
 * Smart/Container/Stateful components -> Component that does manage state
 You should have many more stateLESS than stateFUL components.

#### Comparison
##### Function
* Access to state (`useState()`)
* no life-cycle hooks (only with `react-hooks`)
* Access via props

##### Class-based
* Access to state
* life-cycle hooks
* Access state and props via `this`

### Lifecycle hooks
#### Deprecated
1. componentWillMount -> It is no longer supported, you have to use now `getDerivedStateFromProps(props, state)` instead.

#### Creation
1. `constructor()` -> not a lifecycle hooks, rather a ES6 feature, but first anyway.
	a. DO -> Call `super(props)`, Setup state
	b. DONT -> Cause any side effects
1. `getDerivedStateFromProps(props, state)` -> Whenever your props change, you can sync state with them. Very niche use cases.
	a. DONT -> Cause any side effects
1. `render()` -> prepare and structure your `JSX` code.
	a. DONT -> Cause any side effects
1. Render Child Components -> only when this is done and ALL lifecycle hooks for ALL child componets are finished, this flow for the current component lifecycle hook will continue.
1. `componentDidMount()` -> this is the place to cause side-effects.
	a. DO -> cause side-effects if needed. (request, write localhost...)
	b. DONT -> Mutate state! never here!

#### Update
1. `getDerivedStateFromProps(props, state)` -> Update your state based on outside changes, very rarele used.
	a. DO -> Sync your component state
	b. DONT -> Cause any side effects
1. `shouldComponentUpdate(nextProps, nextState): boolean` -> For performance optimizations, decide if your component should update or not.
1. `render()` -> prepare and structure your `JSX` code.
1. Update Child Components -> only when this is done and ALL lifecycle hooks for ALL child componets are finished, this flow will continue.
1. `getSnapshotBeforeUpdate(prevProps, prevState): state` -> last minute DOM operations. **The output of this method will be available in the componentDidUpdate() lfh arguments**.
	a. DO -> DOM operations
	b. DONT -> Cause any side effects
1. `componentDidUpdate()` -> this is the place to cause side-effects. If you run `getSnapshotBeforeUpdate`, you can receive here `componentDidUpdate(prevProps, prevState, snapshot)`.
	a. DO -> cause side-effects if needed. (request, write localhost...)
	b. DONT -> Mutate state! never here! (triggers re-render, deadlooock!)

### Cleanup
1. componentWillUnmount -> perform cleanup stuff before deleting (unmounting) the component

#### Legacy LCH
1. componentWillMount
1. componentWillReceiveProps

#### Most widely used LFH
1. componentDidMount
1. componentDidUpdate
1. shouldComponentUpdate

### Consideration regarding shouldComponentUpdate
If you are to compare ALL component props in the `shouldComponentUpdate` LCH, there is an easy shortcut for that, you can NOT include at all this LCH and instead extend from `PureComponent`, which is a component that holds no internal state and depends entirely on it's props.
```javascript
import React, { PureComponent } from 'react';

export default class MyComponent extends PureComponent {
	// This component will NOT update if none of it's props changed
}
```
