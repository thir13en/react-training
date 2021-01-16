# Debugging

Because we all make mistakes...  


React tries to figure out where the errors occur and drop significant error messages on compilation error and the console.

### Sourcemaps
They are usually in the `resources` tab of your `devtools`, under `localhost`, you will find a folder with the route to your app, and a `src` folder inside, here you can find the `sourcemaps`.  
`sourcemaps` are **translation files** that are not directly run in the browser but link your `source code` to the `js bundle` actually being parsed in the Browser.

### React DevTools
Firefox and Chrome extension. It has two main features:

#### Components
Representation of the `react` components rendered on the screen, you can click on those to see the props and the state, inspect the elements rendered by this component, and access the component source code.  
You can even hot change the state and props here, great to play around without hardcoding anything in your code.

#### Profiler
Performance features for `react`.