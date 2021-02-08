# Higher Order Components

### Strucuture within the app
It is convenient to have a `hoc` folder that contains al Higher Order Components. It is kind of convention to name `HOC` starting with a `With`, for example a component that acts as a wrapper `div` with a class can be named `WithClass`.
```jsx
import React from 'react';

const WithClass = (props) =>
	<div className={props.classes}>
		{props.children}
	</div>

export default WithClass;
```

### Another syntax for HOC
```jsx
import React from 'react';

const withClass = (WrapperComponent, className) => {
	return (props) =>
	<div className={className}>
		// Notice the syntax to destructure and pass props!
		<WrappedComponent {...props}/>
	</div>
}

export default withClass;
```
Usage:
```jsx
import React from 'react';
import withClass from '../hoc/withClass';

const MyComponent => (
	// whatever
);

export default withClass(MyComponent, 'my-classes to-add');
```
Now you wrap another component in the export with it!  

If your hoc is purely structural, use the logic on top, otherwise, if it adds business logic, a wrapper component is more appropriate.

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

### Now there is a build in Aux component
We are talking about `React.Fragment`.

```javascript
import React, { Fragment } from 'react';
const heading = props =>
	<Fragment>
		React.createElement('h1', {}, props.title)
		React.createElement('h2', {}, props.subtitle);
	</Fragment>;

export default heading;
```
