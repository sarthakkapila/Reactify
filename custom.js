function customRender(element) {
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children

    for (prop in element.props) {
        if (prop == children ) continue;
        domElement.setAtribute(prop, element.props[prop])
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Hello go fuck yourself"
}