// react
import React from 'react';

const render = function() {
    return (
        <div className="turrisExample-component">
            I am standalone Turris example component<br/>
            <b>{this.state.response}</b><br/>
            <button className="btn btn-default" onClick={this.handleClick}>Click me</button>
        </div>
    );
};

export default render;
