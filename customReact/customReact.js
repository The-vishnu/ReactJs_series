function customReder(reactElement, mainContainer) {
    const domEelement = document.createElement(reactElement.type);

    domEelement.innerHTML = reactElement.children;

    domEelement.setAttribute('href', reactElement.props.href);

    domEelement.setAttribute('target', reactElement.props.target);

    mainContainer.appendChild(domEelement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'google.com',
        target: '_blank'
    },

    children: 'click me to visit google'
}

const mainContainer = document.getElementById('root');

customReder(reactElement, mainContainer)