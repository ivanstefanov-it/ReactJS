var rootElement = document.getElementById('root');

var reactElement = React.createElement(
    'div',
    null,
    React.createElement(
        'header',
        null,
        React.createElement(
            'h1',
            null,
            'Hello from JSX'
        ),
        React.createElement(
            'h2',
            null,
            'The best framework in the world!'
        ),
        React.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo voluptas voluptate ad voluptatum minus illo alias debitis, itaque fugiat.'
        )
    ),
    React.createElement(
        'footer',
        null,
        'All rights reserved \xA9'
    )
);

ReactDOM.render(reactElement, rootElement);