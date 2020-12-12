# General

A JavaScript library for building user interfaces, targetting SPAs mostly but really flexible.

### Main features

#### Declarative
Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

#### Component-Based
Build encapsulated components that manage their own state, then compose them to make complex UIs.

#### Composable
Does not make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

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
`ReactDOM.render(<Universe />, document.querySelector('#multiverse'));`
So:
`ReactDOM.render(<MainComponent />, document.querySelector('<container-selector>'));`