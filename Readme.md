# Reactify 

Creating ⚛️ React from scratch This project is aimed to understand the implementation & the inner workings of React. Built with passion for learning and sharing knowledge!

# Features
- CreateElement: Create virtual DOM elements with a given type, properties, and children.
- Render: Render virtual DOM elements into a real DOM container.
- useState: Manage state in functional components using the useState hook.
- Custom Reconciliation: Efficiently update the DOM by reconciling changes between virtual and real DOM elements.
- Event Handling: Attach event listeners to DOM elements with ease.

# Usage

```js
const Reactify = require('reactify');

// Create a functional component
function Counter() {
  const [count, setCount] = Reactify.useState(0);

  return Reactify.createElement('div', null,
    Reactify.createElement('h1', null, `Count: ${count}`),
    Reactify.createElement('button', { onClick: () => setCount(count + 1) }, 'Increment')
  );
}

// Render the component into a container
const container = document.getElementById('root');
Reactify.render(Reactify.createElement(Counter), container);
```

# License

Reactify is licensed under the MIT License. See LICENSE for more information.

