function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.textContent = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop !== 'children') {
      domElement.setAttribute(prop, reactElement.props[prop]);
    }
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank'
  },
  children: 'Go fuck yourself bitch!'
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);