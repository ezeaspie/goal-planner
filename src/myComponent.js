import React, { Component } from 'react';

class MyComponent extends Component {

    render() {
        return (
            <div className="Component">
               <h2>Title : {this.props.title}</h2>
               <h3>Name : {this.props.name}</h3>
               <button onClick = {this.props.onClick}>Click</button>
            </div>
        );
    }
}

export default MyComponent;
