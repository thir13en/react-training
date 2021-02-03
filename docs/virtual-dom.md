# Virtual DOM

On every prop and state change, components do a diff between the potentially newly rendered DOM and the current one, which allows React to only re-render those elements that are different in the diff operation. This is why we need to pass `key` property to lists, so that React can keep track of the elements through the identifiers and does not need to diff them by deeply comparing their values, which would be highly inefficient.

### How does React update the DOM?
The `render` method name is misleading, because it does NOT trigger a render cycle immediately.
* `shouldComponentUpdate` passed -> `render()` -> Diff OLD Virtual Dom and New Virtual DOM -> There are render differences -> Update the Real DOM, but only in the places where differences where detected.
* If no VDOM differences are found, we don't update the Real DOM.