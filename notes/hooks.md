# Hooks


They are a way of managing state in funtional components, instead of importing `Component` from `React`, you should import the `useState` hook.

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