# Performance Rules

### Do what you can out of the JSX context
JSX expressions are more expensice to evaluate, so try to keep all logic as pure `JavaScript` whenever possible.

### Avoid unnecessary re-renders with React Memo
React Memo, uses `memoization`, which is a way of keeping in memory the state of a certain element and decide whether it is affected by changes in the state:
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

// This will automagically add memoization to the component, so will only re-render when props change
export default React.memo(person);
```

### React Memo and shouldComponentUpdate
Keep in mind to only use them when really necessary, because the extra logic that they run does **NOT** always makes sense and can be expensive.