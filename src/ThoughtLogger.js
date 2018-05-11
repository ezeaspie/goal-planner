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
            <section className="notes">
                <h3>Notes and Thoughts</h3>
               <textarea 
               placeholder="Write down your notes/thoughts here..." 
               value={this.props.thoughts}
               onChange = {this.onChange}
               />
            </section>
        );
    }
}

export default ThoughtLogger;
