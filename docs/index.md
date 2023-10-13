# Index

1. [Bootstrapping](bootstrapping.md)
1. [Components](components.md)
1. [Create React App](cra.md)
1. [Debugging](debugging.md)
1. [Events](events.md)
1. [General](general.md)
1. [Bootstrapping](bootstrapping.md)
1. [HOC](hoc.md)
1. [Hooks](hooks/index.md)
1. [JSX](jsx.md)
1. [Performance](performance.md)
1. [State](state.md)
1. [Styling](styling.md)
1. [Virtual DOM](virtual-dom.md)
1. [React Training](react-training.md)

// REASON FOR COMPONENTS TO RENDER (VDOM)
// - (1) my own state change
// - (2) DEFAULT: if my parent RENDERS and I'm a part of my parent, I shall render as well
//   - props change - MYTH 
//   - optimization: memo - when the props are THE SAME, ddon't rerender
// - (3) context value change (e.g. redux, react-query, etc)

// PERFROMANCE OPTIMIZATION 
// (1) keep state as low as possible
//   - rather keep away from "smart/dumb" component distinction
// (2) useMemo - cache: calculations, object references
// (3) memo - cache: components

COMPONENT: (props) => VDOM
MEMO: (COMPONENT) => COMPONENT