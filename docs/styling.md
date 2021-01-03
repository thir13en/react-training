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