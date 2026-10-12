function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // This reuires each attribute to be set manually hence not dynamic

    // replacing a loop based approach:
    for(const prop in reactElement.props){       // here prop refers to each key in props 
        if(prop === 'children') continue;      // in case children are there in props (which is not in our case)
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    
    container.appendChild(domElement)
}
// Normally this is how actually React works in the background. A bundler called Babble works to convert our jsx syntax (which we write inside our return(HTML) in our functions ) into this object type syntax behind the scenes by parsing

const reactElement = {          // our element as an object
    type: 'a',
    props: {
        href: "https.google.com",
        target: "_blank"
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.getElementById('root');          // root element

customRender(reactElement, mainContainer)

