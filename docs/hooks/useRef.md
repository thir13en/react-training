# useRef

This hook is used to gain direct DOM element acces.

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

References are populated in the second render. In the first one `ref.current` will be undefined.

Whenever a ref changes, the component does NOT re-render. For that use case where we need to react to changes of refs, we need to update the useState hook on ref change.