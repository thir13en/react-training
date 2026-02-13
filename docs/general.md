Improve the notes for my course with interesting additions and better formatting:

---

# General Overview

React is a JavaScript library for building web and native user interfaces. It abstracts away much of the complexity of UI development, letting you focus on building components as functions of your app state.

## Main Features

- **Declarative:** Design simple views for each state, and React updates and renders the right components when your data changes.
- **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs.
- **Composable:** Integrates easily with other libraries or frameworks.
- **JSX:** Write HTML-like markup directly in your JavaScript files.

## Motivation
- Easily manage UI state
- Focus on business logic, delegate UI management
- Huge community and ecosystem

## Core Building Blocks
- `React`: The UI library itself
- `ReactDOM`: Renders components to the browser DOM

## Example: Binding App with ReactDOM
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

---

## VanillaJS vs React Example

### VanillaJS
```javascript
const content = [
 [
 "React is extremely popular",
 "It makes building complex, interactive UIs a breeze",
 "It's powerful & flexible",
 "It has a very active and versatile ecosystem"
 ],
 [
 "Components, JSX & Props",
 "State",
 "Hooks (e.g., useEffect())",
 "Dynamic rendering"
 ],
 [
 "Official web page (react.dev)",
 "Next.js (Fullstack framework)",
 "React Native (build native mobile apps with React)"
 ]
];

const btnWhyReact = document.getElementById("btn-why-react");
const btnCoreFeature = document.getElementById("btn-core-features");
const btnResources = document.getElementById("btn-resources");
const tabContent = document.getElementById("tab-content");

function displayContent(items) {
 let listContent = "";
 for (const item of items) {
 listContent += `<li>${item}</li>`;
 }
 const list = document.createElement("ul");
 tabContent.innerHTML = ""; // clear existing content
 list.innerHTML = listContent; // insert new content
 tabContent.append(list);
}

function highlightButton(btn) {
 // Clear all existing styling / highlights
 btnWhyReact.className = "";
 btnCoreFeature.className = "";
 btnResources.className = "";
 btn.className = "active"; // set new style / highlight
}

function handleClick(event) {
 const btnId = event.target.id;
 highlightButton(event.target);
 if (btnId === "btn-why-react") {
 displayContent(content[0]);
 } else if (btnId === "btn-core-features") {
 displayContent(content[1]);
 } else {
 displayContent(content[2]);
 }
}

displayContent(content[0]); // initially show this content

btnWhyReact.addEventListener("click", handleClick);
btnCoreFeature.addEventListener("click", handleClick);
btnResources.addEventListener("click", handleClick);
```
### React (Functional Component)
```jsx
import { useState } from "react";

const content = [
	[
		"React is extremely popular",
		"It makes building complex, interactive UIs a breeze",
		"It's powerful & flexible",
		"It has a very active and versatile ecosystem"
	],
	[
		"Components, JSX & Props",
		"State",
		"Hooks (e.g., useEffect())",
		"Dynamic rendering"
	],
	[
		"Official web page (react.dev)",
		"Next.js (Fullstack framework)",
		"React Native (build native mobile apps with React)"
	]
];

export default function App() {
	const [activeContentIndex, setActiveContentIndex] = useState(0);
	return (
		<div>
			<h1>React.js</h1>
			<button onClick={() => setActiveContentIndex(0)}>Why React?</button>
			<button onClick={() => setActiveContentIndex(1)}>Core Features</button>
			<button onClick={() => setActiveContentIndex(2)}>Related Resources</button>
			<ul>
				{content[activeContentIndex].map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
}
```

---

## Best Practices
- Prefer functional components and hooks for new code
- Use clear, descriptive names for components and props
- Keep components small and focused
- Use PropTypes or TypeScript for type safety
- Write tests for critical logic

## Common Pitfalls
- Avoid mutating state directly; always use state setters
- Don’t use index as key in lists unless items are static
- Remember that setState is asynchronous

## Accessibility
- Use semantic HTML elements
- Add ARIA attributes where necessary
- Ensure keyboard navigation works for interactive elements

## Further Reading
- [JSX](jsx.md)
- [Hooks](hooks/index.md)
- [State Management](state.md)
- [Performance](performance.md)

---

## Exercises
1. Refactor a class component to a functional component using hooks.
2. Build a simple counter app with useState.
3. Add PropTypes to a component and test type errors.

---

_For more details, see each section above. Practice exercises are included at the end of each note._