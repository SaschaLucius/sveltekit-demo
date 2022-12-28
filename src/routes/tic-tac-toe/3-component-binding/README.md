# Component Binding

https://svelte.dev/tutorial/bind-this

- readonly binding of DOM elements
- the value of DOM element will be undefined until the component has mounted, so we put the logic inside the onMount

https://svelte.dev/tutorial/component-this

- bind to component instances
- Note that we can't interact since the component is undefined when the button is first rendered and throws an error.

https://www.koderhq.com/tutorial/svelte/this/

https://codechips.me/svelte-bind-directive/#binding-dom-elements

- Note that you have to wire up your logic in the onMount hook, otherwise you will get a null reference exception.

https://sveltesociety.dev/recipes/component-recipes/getting-references-to-components-in-each-blocks

- bind:this
  - Using an object as a hashtable
  - Using an array

# Export component function

https://stackoverflow.com/questions/58287729/how-can-i-export-a-function-from-a-svelte-component-that-changes-a-value-in-the

# Fully typed Event Dispatcher

https://stackoverflow.com/a/67951078
https://github.com/sveltejs/svelte/issues/5211
https://github.com/sveltejs/language-tools/issues/1371
