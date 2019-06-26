import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {    
    render() {
        return (
            <div>React JS and JSC in action</div>
        )
    }
}

// The component tag name App is the class name, and the second argument is the element to replace
ReactDOM.render(<App/>, document.getElementById('root'));