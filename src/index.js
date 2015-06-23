// react
import React from 'react';
// store
import turrisExampleChannel from './store';
// template
import Template from './template.jsx';

// create component
const TurrisExampleComponent = React.createClass({
    // initilize state
    getInitialState() {
        turrisExampleChannel.subscribe('response', this.onResponse);
        // return state
        return {
            response: 'Click the button.',
        };
    },
    onResponse({data}) {
        this.setState({response: data});
    },
    handleClick() {
        turrisExampleChannel.publish('request', {request: 'test'});
    },
    render: Template,
});

export default TurrisExampleComponent;
