# Higher Order Components

### Creating a HOC to wrap adjacent elements
```javascript
import React from 'react';

const Aux = props =>  props.children;

export default Aux;
```
```jsx
import React from 'react';
import Aux from './Aux'

const MyComponent = props =>  (
	<Aux>
		// Now you can return multiple root components
		<h1 key="el1">Hi, I am a React Element</h1>,
		<h1 key="el2">Hi, I am a React Element</h1>,
		<h1 key="el3">Hi, I am a React Element</h1>,
		<h1 key="el4">Hi, I am a React Element</h1>,
	</Aux>
);

export default Aux;
```
This works without adding any extra container div, because under the hood the Aux component is just calling a root `React.renderElements()`, which is basically the requirement that react has to render a root node. This is a pure JavaScript thing, a tweak that we can use in React.  

Why can’t you return adjacent, top-level JSX elements? It becomes clear, once you translate the JSX code to the `React.createElement()`
```javascript
import React from 'react';

const heading = props => (
	<h1>{props.title}</h1>
	<h2>{props.subtitle}</h2>
);
export default heading;
```
This is NOT allowed because it would be translated to:
```javascript
import React from 'react';
const heading = props =>
	React.createElement('h1', {}, props.title)
	React.createElement('h2', {}, props.subtitle);

export default heading;
```
Which is invalid JavaScript syntax.
