import React, { Component } from 'react';

class MoodForm extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e) => {
        this.props.onMoodSelect(e.target.value);
    }
    render() {

        return (
            <div>
                <h3>Moods</h3>
                <input type="radio" name="mood" value="Terrible" onChange={this.handleChange} /><label>Terrible</label>
                <input type="radio" name="mood" value="Bad" onChange={this.handleChange} /><label>Bad</label>
                <input type="radio" name="mood" value="Okay" onChange={this.handleChange} /><label>Okay</label>
                <input type="radio" name="mood" value="Good" onChange={this.handleChange} /><label>Good</label>
                <input type="radio" name="mood" value="Excellent" onChange={this.handleChange} /><label>Excellent</label>
            </div>
        );
    }
}

export default MoodForm;
