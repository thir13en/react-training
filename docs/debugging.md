# Debugging

Because we all make mistakes...  


React tries to figure out where the errors occur and drop significant error messages on compilation error and the console.

### Sourcemaps
They are usually in the `resources` tab of your `devtools`, under `localhost`, you will find a folder with the route to your app, and a `src` folder inside, here you can find the `sourcemaps`.  
`sourcemaps` are **translation files** that are not directly run in the browser but link your `source code` to the `js bundle` actually being parsed in the Browser.

### React DevTools
Firefox and Chrome extension. It has two main features:

#### Components
Representation of the `react` components rendered on the screen, you can click on those to see the props and the state, inspect the elements rendered by this component, and access the component source code.  
You can even hot change the state and props here, great to play around without hardcoding anything in your code.

#### Profiler
Performance features for `react`.

### Error Boundaries
Is a new feature introduced in `react>16`, the syntax looks like this:
```jsx
import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
	state = {
		hasError: false,
		errorMessage: '',
	}

	// Pay attention to this lifecycle hook!
	componentDidCatch = (error, info) => {
		this.setState({ hasError: true, errorMessage: error });
	}

	render() {
		if (this.state.hasError) {
			return <h1>{this.state.errorMessage}</h1>;
		} else {
			return this.props.children;
		}
	}
} 
```
Now you got a brand new component which can act as a HOC that wraps any other and formats the erros that are produced in them!  
**Only use ErrorBoundaries when you know your code might fail**.  
