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
            <section className="mood">
                <h3>Moods</h3>
                <div className="selection">
                <input type="radio" name="mood" value="Terrible" onChange={this.handleChange} /><label className="ter"></label>
                <input type="radio" name="mood" value="Bad" onChange={this.handleChange} /><label className="bad"></label>
                <input  type="radio" name="mood" value="Okay" onChange={this.handleChange} /><label className="ok"></label>
                <input  type="radio" name="mood" value="Good" onChange={this.handleChange} /><label className="good"></label>
                <input  type="radio" name="mood" value="Excellent" onChange={this.handleChange} /><label className="excellent"></label>
                </div>
                    {
                        this.props.mood === ""
                            ? (
                                <h3>You haven't chosen a mood</h3>
                            )
                            : (
                                <h3>Your day was {this.props.mood}</h3>

                            )
                    }
            </section>
        );
    }
}

export default MoodForm;
