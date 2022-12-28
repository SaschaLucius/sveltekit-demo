https://svelte.dev/tutorial/context-api

- setContext and getContext must be called during component initialization
  - otherwise "Uncaught Error: Function called outside component initialization"

https://imfeld.dev/writing/svelte_context

- Each component is automatically passing down its contextual data to all of its child components
- is only visible to the current component and its children
- is just a Javascript Map with some set of keys and values

https://retro.cloud/sveltekit-and-the-client-pattern/

- create typed wrapper around the context

https://svelte.dev/docs#run-time-svelte-setcontext
