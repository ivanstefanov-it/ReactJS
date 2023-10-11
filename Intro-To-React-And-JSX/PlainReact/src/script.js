let rootElement = document.getElementById('root');

let reactElement = <div>
    <header>
        <h1>Hello from JSX</h1>
        <h2>The best framework in the world!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo voluptas voluptate ad voluptatum minus illo alias debitis, itaque fugiat.</p>
    </header>
    <footer>All rights reserved &copy;</footer>
</div>;

ReactDOM.render(reactElement, rootElement);