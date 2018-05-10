import React, { Component } from 'react';

class AddNewDay extends Component {
    constructor(props) {
        super(props);

        this.handleNewDay = this.handleNewDay.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleForward = this.handleForward.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleNewDay() {
        this.props.addDay();
    }

    handleBack() {
        this.props.back();        
    }

    handleForward() {
        this.props.forward();
    }

    handleDelete() {
        this.props.deleteDay();
    }

    render() {
        return (
            <div>
                <h3>Current Day = {this.props.currentDay}</h3>
                <button onClick = { this.handleNewDay }>Add New Day</button>
                <button onClick = { this.handleBack }> Back </button>
                <button onClick={ this.handleForward }> Forward </button>   
                <button onClick={ this.handleDelete }> Delete </button>             
            </div>
        );
    }
}

export default AddNewDay;