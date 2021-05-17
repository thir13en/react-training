# Hooks


### LifeCycle Hooks in functional components
Welcome to `React Hooks`. The two most important hook are `useState` and `useEffect`.
```javascript
import React, { useEffect } from 'react';


const person = (props) => {
	// This will run in EVERY render cycke
	useEffect(() => console.log('[Person] useEffect'));

	return (
		<p>Im  aperson and I am {props.age} years old</p>
		<p>{props.children}</p> // Some content...
	);

}

export default person;
```

### useEffect
Run business logic on every render cycle, runs for every update, so in this sense equals `componentDidUpdate`.  
It also runs when the component is created, because the first render cycle is a render cycle also, so equals also `componentDidMount`.
`getDerivedStateFromProps` is not included here.

##### useEffect in the real life
So `useEffect` is tricky, because it runs on mount and update cycles. **What if we only want to run certain logic in one of the two?**, you solve this with a second argument. Lets look at an example:
```javascript
import React, { useEffect } from 'react';


const person = (props) => {
	// This will run in EVERY render cycke
	useEffect(() => {
		console.log('[Person] useEffect');
		// HTTP request...
		fetch('/endpoint').then(console.log);
	// this second argument lets you filter when this effect is triggered, in this case only when props.propName changes value
	}, [props.propName]);

	// You can have as many useEffects as you want!
	useEffect(() => {
		console.log('[Person] useEffect2');
		// HTTP request...
		fetch('/endpoint2').then(console.log);
	}, [props.anotherProp]);

	return (
		<p>Im  aperson and I am {props.age} years old</p>
		<p>{props.children}</p> // Some content...
	);

}

export default person;
```
##### Simulating componentDidMount
If we only want to run an effect the first time componnet is rendered, we can do so! Just pass an empty array
```javascript
import React, { useEffect } from 'react';


const person = (props) => {
	// This will run in EVERY render cycke
	useEffect(() => {
		console.log('[Person] useEffect');
		// HTTP request...
		fetch('/endpoint').then(console.log);
	// This effect only runs on component first render!
	}, []);

	return (
		<p>Im  aperson and I am {props.age} years old</p>
		<p>{props.children}</p> // Some content...
	);

}

export default person;
```
This basically tells `react` that this component has no prop dependencies and thus will never be refreshed!

##### Simulating componentWillUnmount
If we return an anonymous function **and** pass an empty array as a second argument, the returned anonymous function will run only on component unmounts, otherwise would run **after each render **Please check with console to deeper understand this**.
```javascript
import React, { useEffect } from 'react';


const person = (props) => {
	// componentDidUnmount equivalent
	useEffect(() => {
		console.log('[Person] useEffect');
		fetch('/endpoint').then(console.log);

		return () => {
			console.log('housekeeping!');
		};
	// notice the second parameter
	}, []);

	// runs after each render cycle
	useEffect(() => {
		console.log('[Person] useEffect');
		fetch('/endpoint').then(console.log);

		return () => {
			console.log('frequent housekeeping!');
		};
	});

	return (
		<p>Im  aperson and I am {props.age} years old</p>
		<p>{props.children}</p> // Some content...
	);

}

export default person;
```
This basically tells `react` that this component has no prop dependencies and thus will never be refreshed!

#### useState
They are a way of managing state in funtional components, instead of importing `Component` from `React`, you should import the `useState` hook.
This one can take the place of `getDerivedStateFromProps`, with `useState` you can basically hook it to your `props` and pass data to the `state` if you need it.

### useState example
```javascript
import React, { useState } from 'react';


const Car = props => {
	const [doingState, setDoingState] = useState({
		doing: 'testing',
	});
	const [randomState, setRandomState] = useState('the most random string');

	const switchDoingHandler = () => {
		setDoingState({
			doing: 'resting',
		});
	}

	return (
		<p onClick={switchDoingHandler}>We are { doingState.doing }</p>
	);
}
```
Use state, returns an array of exactly **two** elements, the first being the state itself and the second one a `function` that allows us to update the state.

### Using References with Hooks
```javascript
import React, { useEffect, useRef } from 'react';


const Car = props => {
	// Craete reference in useEffect, since it runs after every render cycle
	// Since until we dont run the render we will not assign the reference
	const elementRef = useRef(null);

	useEffect(() => {
		elementRef.current.click();
	}, []);

	const switchDoingHandler = () => {
		setDoingState({
			doing: 'resting',
		});
	}

	return (
		<button ref={elementRef}>We are { doingState.doing }</button>
	);
}
```
