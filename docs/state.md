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
import AuthContext from '../Context/AuthContext.js';

export default class MyProviderComponent extends Component {
	loginHandler: (authenticated) => {
		this.setState({ authenticated });
	}

	render() {
		return (
			<div>
				// This will override the default value you assigned before
				// Since we are passing the state, the authcontext will update when the state updates and triggers a new render
				// cycle
				<AuthContext.Provider value={{
					authenticated: this.state.authenticated,
					login: this.loginHandler,
				}} >
					<h1>Authenticated!<h1>
				</AuthContext.Provider>
			</div>
		);
	};
};
```
React will re-render when state or props change, **only changing something in a Context will NOT trigger a render cycle**. 

```javascript
import React, { Component } from 'react';
import AuthContext from '../Context/AuthContext.js';

export default class MyConsumerComponent extends Component {
	render() {
		return (
			<div>
				// Content is a function that returns JSX code
				<AuthContext.Consumer>
					{(context) => (
						<div>	
							<h1>{context.authenticated ? 'Authenticated!' : 'Login to continue...'}<h1>
							{context.authenticated && <button onClick={context.login}>Login</button>}
						</div>
					)}
				</AuthContext.Consumer>
			</div>
		);
	};
};
```

#### A more elegant way
Then import it in your component
```javascript
import React, { Component } from 'react';
import AuthContext from '../Context/AuthContext.js';

export default class MyConsumerComponent extends Component {
	// This syntax must match EXACTLY
	static contextType = AuthContext;
	// Now you can access a new property in your component, the this.context

	render() {
		return (
			<div>
				<div>	
					<h1>{this.context.authenticated ? 'Authenticated!' : 'Login to continue...'}<h1>
					{this.context.authenticated && <button onClick={this.context.login}>Login</button>}
				</div>
			</div>
		);
	};
};
```
In the case of functional componets you can use the `useContext` hook:
```javascript
import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext.js';

const MyConsumerComponent => (props) => {
	const authContext = useContext(AuthContext);

	return (
		<div>
			<div>	
				<h1>{authContext.authenticated ? 'Authenticated!' : 'Login to continue...'}<h1>
				{authContext.authenticated && <button onClick={authContext.login}>Login</button>}
			</div>
		</div>
	);
};
```