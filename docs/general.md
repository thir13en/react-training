Improve the notes for my course with interesting additions and better formatting:

# General

A JavaScript library for building web and native user interfaces.

### Main features
It abstracts a lot of complexity from building UI libraries vs Vanilla JavaScript. It understands UI as a function of your app state and updates elements of it accordingly.

#### Declarative
Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

#### Component-Based
Build encapsulated components that manage their own state, then compose them to make complex UIs.

#### Composable
Does not make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

#### JSX
Has an ad-hoc language html-like that allows you to build markup interfaces withing a JavaScript file.

### Motivation
* Easily manage UI state
* Focus on business logic, delegate the UI management
* Huge community

### The backbone
React is a Javascript library for creating fast and component based UIs, the two main building blocks of it are:
* `React`: The UI library itself
* `React-DOM`: The connector that renders the components to the real browser DOM

### Binding our app with ReactDOM
Would look like:
`ReactDOM.render(, document.querySelector('#multiverse'));`
So:
`ReactDOM.render(, document.querySelector(''));`

### Comparing a VanillaJS implementation vs React implementation of a use case
#### VanillaJS
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
#### React
```jsx
import { useState } from "react";
import "./styles.css";

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
 
 
 
 
 React.js
 i.e., using the React library for rendering the UI
 
 

 
 
 setActiveContentIndex(0)}
 >
 Why React?
 
 setActiveContentIndex(1)}
 >
 Core Features
 
 setActiveContentIndex(2)}
 >
 Related Resources
 
 
 
 <ul>
 {content[activeContentIndex].map((item) => (
 <li>{item}</li>
 ))}
 </ul>
 
 
 
 );
}

```