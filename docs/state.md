# State

### Context
Allows us to manage state that otherwise would need to travel several levels from parent to child and grandchildrent etc.

#### Usage
Create a folder named `Context`, and inside create for example a filename named `AuthContext.js`, which will contain the following code:
```javascript
import React from 'react';

// Initiallize with a value
const authContext = React.createContext(
	{authenticated: false},
	login: () => {},
);

export default authContext;
```
Then import it in your component
```javascript
import React, { Component } from 'react';
import authContext from '../Context/AuthContext.js';

export default class MyComponent extends Component (
	loginHandler: (authenticated) => {
		this.setState({ authenticated });
	}

	render() {
		return (
			<div>
				// This will override the default value you assigned before
				// Since we are passing the state, the authcontext will update when the state updates and triggers a new render
				// cycle
				<AuthContext.provider value={{
					authenticated: this.state.authenticated,
					login: this.loginHandler,
				}} >
					<h1>Authenticated!<h1>
				</AuthContext.provider>
			</div>
		);
	};
);

export default authContext;
```
React will re-render when state or props change, **only changing something in a Context will NOT trigger a render cycle**. 