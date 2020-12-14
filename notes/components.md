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