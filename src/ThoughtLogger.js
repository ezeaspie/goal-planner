import React, { Component } from 'react';

class ThoughtLogger extends Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        this.props.onThoughtsChange(e.target.value);
        console.log(e.target.value);
    }

    render() {
        return (
            <div className="notes">
               <textarea 
               placeholder="Write down your notes/thoughts here..." 
               value={this.props.thoughts}
               onChange = {this.onChange}
               />
            </div>
        );
    }
}

export default ThoughtLogger;
