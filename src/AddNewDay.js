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
            <header>
                <h1>Goal Planner</h1>
                <button className="add" onClick = { this.handleNewDay }></button>
                <button className="back" onClick = { this.handleBack }></button>
                <button className="forward" onClick={ this.handleForward }></button>   
                <button className="delete" onClick={ this.handleDelete }></button>             
            </header>
        );
    }
}

export default AddNewDay;