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

### Importing Regular CSS
You can use `css` imports to access your styles, it is important to note that a `JavaScript` object containing a mapping of all our classess will be available in our component, like this:
```jsx
import React from 'react';
import styles from 'my-styles.css';

const Burns = (props) => (
	// This will apply your class in the CSS file, which is mapped as a JS object
	<div className={styles.myClass}>
		<h1>Runs the Termonuclear plant in Springfield</h1>
	</div>
);
```

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
import styled from 'styled-components';

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

### Adding Dynamic behaviour to styled-components
We can do so by passing dynamic props to the style components, for example:
```jsx
import React from 'react';
import styles from 'styled-components';

const StyledP = styled.p`
	// Just regular css here
	background-color: ${props => props.alt ? 'blue' : 'green'};
	
	&:hover {
		background-color: red;
	}
`

const App = (props) => {
	return (
		// between the backticks, you add your styles!
		<StyledP alt={props.myDynamicProp}>My styled paragraph</StyledP>
	);
}

export default App;
```

### CSSModules
If you're not a big fan of `CSS in JavaScript`, this package comes to the rescue.  
It is important to note that for using `CSSModules` with `react-scripts < v2`, you need to `eject` your project and go to the `css` loader config to tweak the following:
```javascript
loader: require.resolve('css-loader'),
options : [
	importLoaders: 1,
	// this is only in prod
	minimize: true,
	sourceMap: shouldUseSourceMap,
	// End of only in prod
	// This is what we add to both prod and dev:
	modules: true,
	// this takes care of className generation
	localIdentName: '[name]__[local]__[hash:base64:5]',
],
```
After v2, everything is handled automatically for us to use `css-modules`, the only condition is that you name your `css` files with the extension `.module.css`.  
Now we can import default name from our css file:
```javascript
import React from 'react';
import myLocal from '/my-styles.module.css';

const App = (props) => {
	return (
		// between the backticks, you add your styles!
		<p className={myLocal.className} alt={props.myDynamicProp}>My styled paragraph</StyledP>
	);
}

export default App;
```
The `css-module` feature detects imports from css files and transforms it to a unique hash which is mapped from the js files to generate the pointers to the unique classes generated. This is guaranteed to be unique in our component, so there are no name clashes.  

Now we can assign styles dinamically accessing them, we can create a buffer array that we can join in the `className`:
```javascript
import React from 'react';
import myLocal from '/my-styles.module.css';

const classList = [myLocal.Blue];

if (condition) {
	classList.push(myLocal.Red);
}

const App = (props) => {
	return (
		// between the backticks, you add your styles!
		<p className={myLocal.join(' ')} alt={props.myDynamicProp}>My styled paragraph</StyledP>
	);
}

export default App;
```
Under the hood, `css-modules` generates uniques `classNames` that follow the pattern: `ComponentName__CssUsedClass__UniqueHash_NumericIdent`.  
By the way, if you somehow also **want to define a global** (i.e. un-transformed) CSS class in such a `.css`  file, you can prefix the selector with `:global`:
```css
:global .Post { ... }
```
Now you can use `className="Post"` anywhere in your app.
