# Styling


### Global Webpack injected styles
To use `css` files in `react` components, you must import them into the component `tsx` file. `Webpack` will take care of this import of a `css` file.  
On the other hand, it is a good practice to wrap your styles in a class or id corresponding to the component name, and assign that class to the component `wrapper` element, in order to keep css styles scoped.

### Using JavaScript objects with representations of the css styles
For example:
```jsx
const buttonStyle = {
	backgroundColor: 'purple',
	border: '1px solid red',
};

const Button = () => <button style={buttonStyle}>I'm Styles</button>
```
This makes the style **fully scoped** to the current component, but on the other hand **we miss the possibility of using advance css features such as `pseudo-selectors`**.

### Dynamic Styles
With the inline styles that you can inject in your JSX code, you can evaluate them with any JavaScript expressions, or modify the contents of the style object at runtime.
```javascript
const style = {
	backgroundColor: green,
}

if (props.isLoaded) {
	style.backgroundColor = blue;
}
return (
	<button style={style} />
);
```

### Dynamic Classes
Here is a nice pattern to dynamically assign classes
```javascript
const classes = [];

if (condition) {
	classes.push('first-class');
}
if (condition2) {
	classes.push('second-class');
}

return (
	<button classList={classes.join(' ')} />
);
```

### Overcoming JS inline pseudo-selectors limitations
You can work around this inconvenience by using a package named `radium`.
```
yarn add radium
```
Then
```jsx
import Radium from 'radium';


const styles = {
	backgroundColor: 'blue',
	':hover': {
		backgroundColor: 'green',
	}
};

// you can also override
style[':hover'] = {
	backgroundColor: 'yellow',
}

const App = (props) => {
	return (
		<>
			<p style={styles}>My styled paragraph</p>
		</>
	);
}

export default Radium(App);
```

### Using Radium for `media-queries`
Use:
```jsx
import Radium, { StyleRoot } from 'radium';


const styles = {
	backgroundColor: 'blue',
	'@media (min-width: 500px)': {
		backgroundColor: 'green',
	}
};

const App = (props) => {
	return (
		<StyleRoot>
			<p style={styles}>My styled paragraph</p>
		<StyleRoot/>
	);
}

export default Radium(App);
```
**This forces us to apply a new HOC at the root component level**: `StyleRoot`.

### Styled Components
A library that helps us style our components in our JSX files with a very simple approach. It heavily relies on a `Vanilla JavaScript` feature named `Tagged Templates`.

```jsx
import React from 'react';
import styles from 'styled-components';

const StyledP = styled.p`
	// Just regular css here
	background-color: blue;
	
	@media (min-width: 500px) {
		background-color: green;
	}
`

const App = (props) => {
	return (
		// between the backticks, you add your styles!
		<StyledP>My styled paragraph</StyledP>
	);
}

export default App;
```
The styled we are importing basically has a method for every `html` element in `JSX`.  
`styled-components` takes this `css`styles and appends them in `style` tags on the top of the production build, with a class that looks like a unique `hash` and encapsulates it. This makes it an even greater solution because if they were inline styles, they will be overriding the `css cascade`.  
Important to note you can use the `scss` syntax when using styled components:
```jsx
import React from 'react';
import styles from 'styled-components';

const StyledP = styled.p`
	// Just regular css here
	background-color: blue;
	
	&:hover {
		background-color: red;
	}
`

const App = (props) => {
	return (
		// between the backticks, you add your styles!
		<StyledP>My styled paragraph</StyledP>
	);
}

export default App;
```